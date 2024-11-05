import express from 'express';
import {
    doctorList,
    loginDoctor,
    appointmentsDoctor,
    cancelAppointment,
    completeAppointment
} from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';

const doctorRouter = express.Router();

// Doctor routes
doctorRouter.get('/list', doctorList);
doctorRouter.post('/login', loginDoctor);
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor);

doctorRouter.post('/appointmentsDoctor', (req, res) => {
    res.send('Doctor Appointment Endpoint');
});

// Appointment management routes
doctorRouter.post('/appointments/cancel', authDoctor, cancelAppointment);
doctorRouter.post('/appointments/complete', authDoctor, completeAppointment);

export default doctorRouter;
