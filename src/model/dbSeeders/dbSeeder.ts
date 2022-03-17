import { userModelSeeder } from "./userSeeder";
import { projectModelSeeder } from "./projectSeeder";

export const masterSeeder = () => {
  userModelSeeder();
  projectModelSeeder();
};
