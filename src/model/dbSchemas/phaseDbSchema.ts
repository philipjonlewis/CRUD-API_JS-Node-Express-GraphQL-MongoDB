import { Schema } from "mongoose";

export const phaseDbSchema = new Schema(
  {
    _id: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    project: { type: Schema.Types.ObjectId, ref: "project" },
    phaseName: { type: String, require: true },
  
  },
  { timestamps: true }
);
