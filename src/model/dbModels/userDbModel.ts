import mongoose from "mongoose";

import { userDbSchema } from "../dbSchemas/userDbSchema";

// all middleware house be here

export const UserModel = mongoose.model("user", userDbSchema);
