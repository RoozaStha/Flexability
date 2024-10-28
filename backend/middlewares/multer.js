import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // Specify the folder where files will be stored
        callback(null, path.join(__dirname, '../uploads')); // Adjust the path as needed
    },
    filename: function (req, file, callback) {
        // Set the file name as the original name
        callback(null, Date.now() + '-' + file.originalname); // Optionally prepend timestamp to avoid conflicts
    }
});

const upload = multer({ storage });

export default upload;
