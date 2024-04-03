import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected");
  } catch (error) {
    console.log("error connecting to db");
  }
};
export default connectToMongo;
