import mongoose from 'mongoose';

// Define the schema
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  savedAt: { type: Date, default: Date.now } // Automatically set the date when saved
});

// Create the model
const Location = mongoose.model('Location', locationSchema);

export default Location;
