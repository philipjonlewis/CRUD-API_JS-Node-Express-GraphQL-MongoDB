import { Schema } from "mongoose";

export const phaseDbSchema = new Schema(
  {
    _id: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    project: { type: Schema.Types.ObjectId, ref: "project" },
    phaseName: { type: String, require: true },
    phaseOrder: {
      type: Number,
      min: [1, "Phase must start with the first phase"],
      max: [8, "Phase must start with the first phase"],
      required: true,
    },
    cards: [{ type: String, ref: "card" }],
  },
  { timestamps: true }
);
