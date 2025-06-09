"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.uploadImage = exports.getImages = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const util_1 = require("util");
const mkdir = (0, util_1.promisify)(fs_1.default.mkdir);
const exists = (0, util_1.promisify)(fs_1.default.exists);
const imagesDir = path_1.default.join(__dirname, '../../public/images');
const getImages = (req, res) => {
    const files = fs_1.default.readdirSync(imagesDir);
    //   res.json(files.filter(f => f.endsWith('.jpg')));
    // };
    console.log('Images in directory:', files);
    res.json(files.filter(f => f.endsWith('.jpg') ||
        f.endsWith('.jpeg') ||
        f.endsWith('.png') // Add all supported formats
    ));
};
exports.getImages = getImages;
const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    return res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
};
exports.uploadImage = uploadImage;
const resizeImage = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const inputPath = path_1.default.resolve('public/images', filename);
    const outputDir = path_1.default.resolve('public/images/thumbnails');
    const outputFilename = `${width}x${height}_${filename}`;
    const outputPath = path_1.default.join(outputDir, outputFilename);
    // Check if input image exists
    if (!(yield exists(inputPath))) {
        throw new Error(`Input image "${filename}" not found`);
    }
    // Return cached version if it exists
    if (yield exists(outputPath)) {
        return path_1.default.join('thumbnails', outputFilename);
    }
    // Otherwise, resize and save
    yield mkdir(outputDir, { recursive: true });
    console.log('Na hna 6');
    yield (0, sharp_1.default)(inputPath)
        .resize(width, height)
        .toFile(outputPath);
    console.log(outputPath);
    console.log(outputFilename);
    return path_1.default.join('/images/thumbnails', outputFilename); // Return relative path
});
exports.resizeImage = resizeImage;
