import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`MongoDB Connected ✅: ${conn.connection.host}`);

  } catch (error) {
    console.error("MongoDB Connection Error ❌:", error.message);
    process.exit(1);
  }
};
