import { Request, Response } from 'express';
import express from 'express';
import upload from '../middleware/uploadMiddleware';
import * as imageController from '../controllers/imageController';

const router = express.Router();

router.get('/', imageController.getImages);



router.post('/api/images/upload', upload.single('image'), (req: any, res: any) => {
  console.log('UPLOAD ROUTE HIT');

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




router.get('/resize', async (req: any, res: any) => {
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
    const widthNum = parseInt(width as string);
    const heightNum = parseInt(height as string);

    console.log('Na hna 4');
    if (isNaN(widthNum) || isNaN(heightNum)) {
      return res.status(400).json({ error: 'Width and height must be numbers' });
    }


    // Call the resize function
    console.log('Na hna 5');
    const resizedPath = await imageController.resizeImage(
      filename as string,
      widthNum,
      heightNum
    );

    // Return the path to the resized image
    res.json({
      success: true,
      path: resizedPath
    });

  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
