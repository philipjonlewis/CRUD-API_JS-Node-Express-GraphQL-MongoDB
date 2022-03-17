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
    dateOfDeadline: { type: Date, required: true },
    projectDescription: { type: String },
    projectImage: { type: String },
    natureOfProject: {
      type: String,
      required: [true, "All projects must have a category"],
    },
    phases: [{ type: String, ref: "phase" }],
  },
  { timestamps: true }
);
