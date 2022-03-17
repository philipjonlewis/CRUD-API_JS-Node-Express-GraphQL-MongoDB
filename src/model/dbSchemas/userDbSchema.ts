import { Schema } from "mongoose";

export const userDbSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "You must enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "You must enter your last name"],
    },
    username: {
      type: String,
      required: [true, "You must enter a username"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "You must enter a password"],
      trim: true,
      select: false,
    },
    email: {
      type: String,
      required: [true, "You must enter an email"],
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);
