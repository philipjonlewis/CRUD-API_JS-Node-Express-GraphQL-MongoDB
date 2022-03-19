import { Schema } from "mongoose";

export const taskDbSchema = new Schema(
  {
    user: { type: Number, required: true },
    dateOfDeadline: { type: Date, required: true },
    isCompleted: { type: Boolean, default: false },
    isPriority: { type: Boolean, default: false },
    isLapsed: { type: Boolean, default: false },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
