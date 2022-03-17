import mongoose from "mongoose";

import { projectDbSchema } from "../dbSchemas/projectDbSchema";

// all middleware house be here

export const ProjectModel = mongoose.model("project", projectDbSchema);
