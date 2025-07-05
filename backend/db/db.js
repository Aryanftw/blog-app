import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.DB_URL}`);
    console.log("Successfully connected to DB "+connect.connection.host)

  } catch (error) {
    console.log("Error in connecting DB ",error.message)
    process.exit(0);
  }
}

export default connectDB;