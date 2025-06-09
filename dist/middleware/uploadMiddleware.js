"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uploadDir = path_1.default.join(__dirname, '../../public/images');
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const fileFilter = (req, file, cb) => {
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        cb(null, true);
    }
    else {
        cb(new Error('Only JPG/JPEG/PNG files allowed'));
    }
};
// console.log('Upload directory:', uploadDir);
exports.default = (0, multer_1.default)({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } // 5MB limit
});
