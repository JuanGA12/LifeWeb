import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
});

const User = models.User || model('User', userSchema);
export default User;
