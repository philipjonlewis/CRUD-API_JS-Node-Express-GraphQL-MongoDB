import { Schema } from "mongoose";

export const projectDbSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "All projects must have a user"],
    },
    projectName: {
      type: String,
      required: [true, "All projects must have a name"],
    },
    projectDescription: { type: String },
  },
  { timestamps: true }
);
