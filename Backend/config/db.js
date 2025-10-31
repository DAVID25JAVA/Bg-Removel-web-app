import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database conntected");
    });
    // console.log(process?.env?.MONGODB_URI);
    
    const db = await mongoose.connect(
      `${process?.env?.MONGODB_URI}/Bg-Removel`
    );
  } catch (error) {
    console.log("Database connection error:", error?.message);
    process.exit(1);
  }
};

export default connectDB;
