import doctorModel from "../models/doctorModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body;
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
        res.json({ success: true, message: 'Availability changed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Unable to change availability" });
    }
};

const doctorList = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select(['-password', '-email']);
        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const doctor = await doctorModel.findOne({ email });
        if (!doctor) {
            return res.json({ success: false, message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (isMatch) {
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            return res.json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentsDoctor = async (req, res) => {
    try {
        console.log("Fetching all doctor appointments");

        // Fetch all doctor IDs
        const doctors = await doctorModel.find({}, '_id');
        const doctorIds = doctors.map(doctor => doctor._id.toString());

        // Fetch appointments that match any of these doctor IDs
        const appointments = await appointmentModel.find({ docId: { $in: doctorIds } });

        console.log("Appointments fetched:", appointments);
        res.json({ success: true, appointments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Cancel appointment
const cancelAppointment = async (req, res) => {
    const { appointmentId, docId } = req.body;
    
    if (!appointmentId || !docId) {
        return res.status(400).json({ success: false, message: "Appointment ID or Doctor ID missing." });
    }

    try {
        const appointment = await appointmentModel.findOneAndUpdate(
            { _id: appointmentId, docId }, 
            { status: 'canceled' }, 
            { new: true }
        );

        if (!appointment) {
            return res.status(400).json({ success: false, message: "Appointment not found or unauthorized." });
        }

        res.json({ success: true, appointment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Complete appointment
const completeAppointment = async (req, res) => {
    const { appointmentId, docId } = req.body;
    
    if (!appointmentId || !docId) {
        return res.status(400).json({ success: false, message: "Appointment ID or Doctor ID missing." });
    }

    try {
        const appointment = await appointmentModel.findOneAndUpdate(
            { _id: appointmentId, docId }, 
            { status: 'completed' }, 
            { new: true }
        );

        if (!appointment) {
            return res.status(400).json({ success: false, message: "Appointment not found or unauthorized." });
        }

        res.json({ success: true, appointment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export {
    changeAvailability,
    doctorList,
    loginDoctor,
    appointmentsDoctor,
    completeAppointment,
    cancelAppointment
};
