import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Location from './model/location.js'; 
import ser from './model/user.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Define Schemas and Models
import mongoose from 'mongoose';



// API Routes
app.get('/', (req, res) => {
  res.send('Hello World! Server is running.');
});

app.get('/locations', async (req, res) => {
  try {
    const locations = await Location.find().sort({ savedAt: -1 });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching locations' });
  }
});

app.post('/locations', async (req, res) => {
  const { name, lat, lng } = req.body;

  const newLocation = new Location({ name, lat, lng });

  try {
    await newLocation.save();
    res.status(200).json({ message: 'Location saved successfully', newLocation });
  } catch (error) {
    res.status(500).json({ message: 'Error saving location' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
