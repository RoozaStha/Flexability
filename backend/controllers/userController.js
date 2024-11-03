import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import appointmentModel from '../models/appointmentModel.js';

// API to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Missing details" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Enter a valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Enter a strong password. It must be 8 characters" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = { name, email, password: hashedPassword };
        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// API for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ success: true, token });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// API to get user profile data
const getProfile = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId).select('-password');

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        
        res.status(200).json({ success: true, userData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// API to update user profile
const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body;
        const imageFile = req.file;

        if (!name || !phone || !address || !dob || !gender) {
            return res.status(400).json({ success: false, message: "Data missing" });
        }

        const parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;

        await userModel.findByIdAndUpdate(userId, { name, phone, address: parsedAddress, dob, gender });

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
            const imageURL = imageUpload.secure_url;

            await userModel.findByIdAndUpdate(userId, { image: imageURL });
        }

        res.status(200).json({ success: true, message: "Profile updated" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// API to book appointment
const bookAppointment = async (req, res) => {
    try {
        const { userId, docId, slotDate, slotTime } = req.body;
        
        const docData = await doctorModel.findById(docId).select("-password");

        if (!docData.available) {
            return res.json({ success: false, message: "Doctor is not available 😑" });
        }

        let slots_booked = docData.slots_booked || {};
        slots_booked[slotDate] = slots_booked[slotDate] || [];

        if (slots_booked[slotDate].includes(slotTime)) {
            return res.json({ success: false, message: "Slot already booked 😒" });
        } else {
            slots_booked[slotDate].push(slotTime);
        }

        const userData = await userModel.findById(userId).select('-password');
        delete docData.slots_booked
        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        };

        const newAppointment = new appointmentModel(appointmentData);
        await newAppointment.save();

        await doctorModel.findByIdAndUpdate(docId, { slots_booked });
        
        res.json({ success: true, message: "Appointment booked" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Appointment is reserved" });
    }
};

// API to get user appointments for frontend my-appointments page
const listAppointment = async (req, res) => {
    try {
        const { userId } = req.body;
        const appointments = await appointmentModel.find({ userId });

        res.json({ success: true, appointments });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};
//API TO CANCEL APPOINTMENT
const cancelAppointment = async(req,res)=>{
    try {
        const {userId,appointmentId}= req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
         
        //verify appointment user
        if(appointmentData.userId != userId){
            return res.json({success:false,message:'Unauthorized action'})
        }
       await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})

       //releasing doctor slot
       const {docId,slotDate, slotTime} = appointmentData
       const doctorData = await doctorModel.findById(docId)

       let slots_booked = doctorData.slots_booked

       slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

       await doctorModel.findByIdAndUpdate(docId,{slots_booked})

       res.json({success:true, message:'Appointment cancelled'})
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
        
    }
}

// API to make payment of appointment using eSewa
const makePayment = async (req, res) => {
    const { appointmentId } = req.body;

    // Retrieve appointment details
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData) {
        return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    const { amount, userId } = appointmentData;

    // Prepare eSewa payment data
    const paymentData = {
        amt: amount, // amount to be paid
        psc: '0', // payment service charge, typically zero for eSewa
        txAmt: amount, // transaction amount
        tAmt: amount, // total amount
        productId: appointmentId, // product ID to track the payment
        // eSewa requires additional parameters
        su: 'http://localhost:4000/api/user/payment-callback', // success URL
        fu: 'http://localhost:4000/api/user/payment-callback', // failure URL
    };

    // Generate payment URL
    const paymentUrl = `https://esewa.com.np/epay/main?amt=${paymentData.amt}&psc=${paymentData.psc}&txAmt=${paymentData.txAmt}&tAmt=${paymentData.tAmt}&pid=${paymentData.productId}&su=${paymentData.su}&fu=${paymentData.fu}`;

    res.json({ success: true, paymentUrl });
};

// Callback endpoint for eSewa
const paymentCallback = async (req, res) => {
    const { txId, amt, refId } = req.body; // Get the relevant fields from the eSewa callback

    // Verify payment
    try {
        const response = await axios.post('https://esewa.com.np/epay/transverify', {
            amt,
            txId,
            refId,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data) {
            // Payment successful, update appointment status
            await appointmentModel.findByIdAndUpdate(refId, { paid: true });
            res.json({ success: true, message: "Payment successful" });
        } else {
            res.status(400).json({ success: false, message: "Payment verification failed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Payment verification error" });
    }
};


export { registerUser, loginUser, getProfile, updateProfile, bookAppointment,listAppointment ,cancelAppointment,makePayment,paymentCallback};
