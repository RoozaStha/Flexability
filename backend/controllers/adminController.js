import validator from "validator";
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from 'jsonwebtoken';
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";

// API for adding a doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // Check for required fields
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ success: false, message: "Missing details" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        // Check if email already exists
        const existingDoctor = await doctorModel.findOne({ email });
        if (existingDoctor) {
            return res.status(409).json({ success: false, message: "Email is already registered" });
        }

        // Validate password strength
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image to Cloudinary
        let imageUrl = "";
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            imageUrl = imageUpload.secure_url;
        } else {
            return res.status(400).json({ success: false, message: "Image file is missing" });
        }

        // Prepare doctor data
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now(),
        };

        // Save new doctor
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.status(201).json({ success: true, message: "Doctor added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while adding the doctor" });
    }
};

// API for admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            if (!process.env.JWT_SECRET) {
                return res.status(500).json({ success: false, message: "Server configuration error" });
            }
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ success: true, token });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred during login" });
    }
};

// API to get all doctors list for admin panel with pagination
const allDoctors = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const doctors = await doctorModel.find({})
            .select('-password')
            .skip((page - 1) * limit)
            .limit(Number(limit));
        const total = await doctorModel.countDocuments();

        res.status(200).json({ success: true, doctors, total });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching doctors" });
    }
};

// API to get all appointments list
const appointmentsAdmin = async (req, res) => {
    try {
        const appointments = await appointmentModel.find({});
        res.json({ success: true, appointments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching appointments" });
    }
};

//API for appointment cancellation
const appointmentcancel = async(req,res)=>{
    try {
        const {appointmentId}= req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
         
       
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


// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
    try {
        const doctors = await doctorModel.find({});
        const users = await userModel.find({});
        const appointments = await appointmentModel.find({});

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0, 5)
        };

        res.json({ success: true, dashData });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
}

export { addDoctor, loginAdmin, allDoctors,appointmentsAdmin,appointmentcancel,adminDashboard};
