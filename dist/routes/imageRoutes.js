"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const express_1 = __importDefault(require("express"));
const uploadMiddleware_1 = __importDefault(require("../middleware/uploadMiddleware"));
const imageController = __importStar(require("../controllers/imageController"));
const router = express_1.default.Router();
router.get('/', imageController.getImages);
router.post('/upload', uploadMiddleware_1.default.single('image'), (req, res) => {
    // Your existing implementation works fine
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({
        message: 'File uploaded successfully',
        filename: req.file.filename,
        path: `/images/${req.file.filename}`
    });
});
router.get('/resize', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Na hna');
        const { filename, width, height } = req.query;
        // Validate inputs
        console.log(filename);
        console.log(width);
        console.log(height);
        if (!filename || !width || !height) {
            return res.status(400).json({ error: 'Missing filename, width or height' });
        }
        console.log('Na hna 3');
        const widthNum = parseInt(width);
        const heightNum = parseInt(height);
        console.log('Na hna 4');
        if (isNaN(widthNum) || isNaN(heightNum)) {
            return res.status(400).json({ error: 'Width and height must be numbers' });
        }
        // Call the resize function
        console.log('Na hna 5');
        const resizedPath = yield imageController.resizeImage(filename, widthNum, heightNum);
        // Return the path to the resized image
        res.json({
            success: true,
            path: resizedPath
        });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}));
exports.default = router;
