import express from 'express';
import { addDoctor, allDoctors, loginAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

// Route for adding a doctor, requires admin authentication and image upload
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);

// Route for admin login
adminRouter.post('/login', loginAdmin);

// Route to get all doctors, requires admin authentication
adminRouter.get('/all-doctors', authAdmin, allDoctors);

export default adminRouter;
