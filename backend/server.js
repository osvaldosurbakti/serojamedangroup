import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import fs from 'fs';
import connectDB from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import newsEventRoutes from './routes/newsEventRoutes.js';
import historyRoutes from './routes/historyRoutes.js';

// Load environment variables
dotenv.config();

// Connect to the database before starting the server
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database connected successfully");

    const app = express();

    // Middleware for parsing JSON and cookies
    app.use(express.json());
    app.use(cookieParser());

    // Enable CORS
    app.use(
      cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
      })
    );

    // Set cache control header
    app.use((req, res, next) => {
      res.set('Cache-Control', 'no-store');
      next();
    });

    // Fix __dirname for ES Module
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Serve static files (CSS, JS, etc.)
    const frontendPath = path.join(__dirname, '../frontend/build');
    app.use(express.static(frontendPath));

    // Ensure 'uploads' directory exists
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    app.use('/uploads', express.static(uploadPath));

    // API Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/', userRoutes);
    app.use('/api/news-events', newsEventRoutes);
    app.use('/api/history', historyRoutes);

    // Serve React app for all other routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(frontendPath, 'index.html'));
    });

    // Global error handler
    app.use((err, req, res, next) => {
      console.error('❌ Error:', err.message);
      res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
    });

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
};

// Start the server
startServer();
