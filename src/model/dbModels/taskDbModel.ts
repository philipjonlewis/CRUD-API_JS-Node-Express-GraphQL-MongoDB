import mongoose from "mongoose";

import { taskDbSchema } from "../dbSchemas/taskDbSchema";

// All the mongoose middleware functions should be here

export const TaskModel = mongoose.model("task", taskDbSchema);
