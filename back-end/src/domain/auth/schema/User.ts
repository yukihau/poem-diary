import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  username: String,
  password: String,
});

export default mongoose.model('User', userSchema);
