import express from 'express';
import multer from 'multer'; // Add this import for multer
import { addDoctor, loginAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

// Middleware for handling multer errors
const handleUploadError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // A Multer error occurred during the upload
        return res.status(400).json({ success: false, message: err.message });
    } else if (err) {
        // An unknown error occurred
        return res.status(500).json({ success: false, message: 'An unknown error occurred during the upload.' });
    }
    next();
};

// Route for adding a doctor
adminRouter.post('/add-doctor',authAdmin, upload.single('image'), handleUploadError, addDoctor);

// Route for admin login
adminRouter.post('/login', loginAdmin);

export default adminRouter;
