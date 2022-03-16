import mongoose, { Schema } from "mongoose";

export const taskDbSchema = new Schema({
  _id: { type: String, required: true, select: false },
  name: {
    type: String,
    required: true,
  },
});
