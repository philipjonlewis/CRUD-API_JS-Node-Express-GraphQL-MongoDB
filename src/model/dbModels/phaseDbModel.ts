import mongoose from "mongoose";

import { phaseDbSchema } from "../dbSchemas/phaseDbSchema";

// All the mongoose middleware functions should be here

export const PhaseModel = mongoose.model("phase", phaseDbSchema);
