import validator from "validator";
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from "cloudinary";
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';

// Utility function to send consistent error responses
const sendErrorResponse = (res, status, message) => {
    return res.status(status).json({ success: false, message });
};

// API FOR ADDING DOCTOR
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // Check for missing details
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return sendErrorResponse(res, 400, "Missing details");
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return sendErrorResponse(res, 400, "Please enter a valid email");
        }

        // Validate password length and criteria
        if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            return sendErrorResponse(res, 400, "Password must be at least 8 characters long and include one uppercase letter and one number");
        }

        // Hashing doctor password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Check for image file and upload to Cloudinary
        if (!imageFile) {
            return sendErrorResponse(res, 400, "Image file is required");
        }

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

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

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.status(201).json({ success: true, message: "Doctor added successfully" });
    } catch (error) {
        console.error(error);
        sendErrorResponse(res, 500, "An error occurred while adding the doctor");
    }
};

// API FOR ADMIN LOGIN
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check credentials
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // Create JWT token, using email as the payload with a secret and expiration
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ success: true, token });
        } else {
            sendErrorResponse(res, 401, "Invalid credentials");
        }
    } catch (error) {
        console.error(error);
        sendErrorResponse(res, 500, "An error occurred during login");
    }
}

export { loginAdmin, addDoctor };
