import jwt from 'jsonwebtoken';

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Assuming "Bearer <token>"
        if (!token) {
            return res.json({ success: false, message: "Not authorized, login again." });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Not authorized, login again." });
        }

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


export default authAdmin;
