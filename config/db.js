import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

// Load environment variables from config.env file
dotenv.config({ path: "./config.env" });

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URL;
    if (!uri) {
      throw new Error("MONGO_URL environment variable not defined");
    }

    console.log(`MongoDB URI: ${uri}`); // Log the URI to verify it's correct

    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `Connected To MongoDB Database: ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`MongoDB Error: ${error.message}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
