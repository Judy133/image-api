import multer from 'multer';
import path from 'path';
import { Request } from 'express';

const uploadDir = path.join(__dirname, '../../public/images');
console.log('Upload directory:', uploadDir);


const storage = multer.diskStorage({
    destination: (req: Request, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req: Request, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        cb(null, true);
    }
    else {
        cb(new Error('Only JPG/JPEG/PNG files allowed'));
    }
};


// console.log('Upload directory:', uploadDir);

export default multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } // 5MB limit
});