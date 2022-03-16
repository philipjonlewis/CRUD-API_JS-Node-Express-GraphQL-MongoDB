import mongoose from "mongoose";

import { taskDbSchema } from "../dbSchemas/taskDbSchema";

export const TaskModel = mongoose.model("task", taskDbSchema);
