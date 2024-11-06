// Ensure this is in your doctorRouter file
import express from 'express';
import { doctorList,loginDoctor,appointmentsDoctor,appointmentCancel,appointmentComplete } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';

const doctorRouter = express.Router();

// Ensure this route is defined
doctorRouter.get('/list', doctorList);

doctorRouter.post('/login',loginDoctor)

doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)

doctorRouter.post('/complete-appointment',authDoctor,appointmentComplete)

doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)

export default doctorRouter;
