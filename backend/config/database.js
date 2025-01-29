import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // Remove useNewUrlParser and useUnifiedTopology options
      // No need for them anymore
    });
    console.log('Database connected');
  } catch (err) {
    console.error('Error connecting to database:', err.message);
    process.exit(1);
  }
};

export default connectDB;
