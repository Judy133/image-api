import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { promisify } from 'util';

const mkdir = promisify(fs.mkdir);
const exists = promisify(fs.exists);

const imagesDir = path.join(__dirname, '../../public/images');

export const getImages = (req: Request, res: Response) => {
  const files = fs.readdirSync(imagesDir);
//   res.json(files.filter(f => f.endsWith('.jpg')));
// };
console.log('Images in directory:', files);
res.json(files.filter(f => 
    f.endsWith('.jpg') || 
    f.endsWith('.jpeg') || 
    f.endsWith('.png')  // Add all supported formats
  ));
};





export const uploadImage = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  return res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
};

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const inputPath = path.resolve('public/images', filename);
  const outputDir = path.resolve('public/images/thumbnails');
  const outputFilename = `${width}x${height}_${filename}`;
  const outputPath = path.join(outputDir, outputFilename);

  // Check if input image exists
  if (!await exists(inputPath)) {
    throw new Error(`Input image "${filename}" not found`);
  }

  // Return cached version if it exists
  if (await exists(outputPath)) {
    return path.join('thumbnails', outputFilename);
  }

  // Otherwise, resize and save
  await mkdir(outputDir, { recursive: true });
  console.log('Na hna 6');
  await sharp(inputPath)
    .resize(width, height)
    .toFile(outputPath);
console.log(outputPath);
console.log(outputFilename);
  return path.join('/images/thumbnails', outputFilename); // Return relative path
};
