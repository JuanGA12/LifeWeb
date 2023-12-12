import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASSWORD}@lifewebinstancia.wvcmvee.mongodb.net/${process.env.NEXT_PUBLIC_MONGODB_DB}?retryWrites=true&w=majority`
    );
    if (connection.readyState == 1) {
      console.log('MongoDB connected');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(false);
  }
};
