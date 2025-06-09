// src/app.ts
import express from 'express';

import * as path from 'path';
// import cors from 'cors';

import imageRoutes from './routes/imageRoutes';

const app = express();
// app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.use('/api/images', express.static(path.resolve(__dirname, '../../public/images')));

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
  
});

app.use('/', imageRoutes);
// app.use('/upload', imageRoutes);
// Image API
// app.use('/api/images', imageRoutes);

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

export default app;
