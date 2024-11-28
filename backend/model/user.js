import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, validate: validator.isEmail},
  password: { type: String, required: true },
  location: {type:String,},
  
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;