import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/CrudDatabase");
    console.log("Connected to the database");
  } catch (error) {
    console.log("Unable to Connect to the database", error);
  }
};
