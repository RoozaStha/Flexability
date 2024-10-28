import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

// App configuration
const app = express();
const port = process.env.PORT || 4000;

// Database connections
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API endpoint
app.use('/api/admin', adminRouter); // Base route for admin-related operations

// Root route
app.get('/', (req, res) => {
    res.send('API is working great');
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Received SIGINT. Shutting down gracefully...');
    server.close(() => {
        console.log('Closed out remaining connections.');
        process.exit(0); // Exit the process
    });
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Shutting down gracefully...');
    server.close(() => {
        console.log('Closed out remaining connections.');
        process.exit(0);
    });
});
