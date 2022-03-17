import  { Schema } from "mongoose";

export const taskDbSchema = new Schema(
  {
    _id: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    phase: { type: String, ref: "phase" },
    card: { type: String, ref: "card" },
    dateOfDeadline: { type: Date, required: true },
    isCompleted: { type: Boolean, default: false },
    isPriority: { type: Boolean, default: false },
    isLapsed: { type: Boolean, default: false },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
