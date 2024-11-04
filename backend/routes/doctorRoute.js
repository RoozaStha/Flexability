// Ensure this is in your doctorRouter file
import express from 'express';
import { doctorList,loginDoctor } from '../controllers/doctorController.js';

const doctorRouter = express.Router();

// Ensure this route is defined
doctorRouter.get('/list', doctorList);

doctorRouter.post('/login',loginDoctor)

export default doctorRouter;
