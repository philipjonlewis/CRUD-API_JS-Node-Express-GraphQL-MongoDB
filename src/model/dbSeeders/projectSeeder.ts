import fs from "fs";

import { ProjectModel } from "../dbModels/projectDbModel";

const projectData = JSON.parse(
  fs.readFileSync(__dirname + "/projectSeed.json", "utf-8")
);

export const projectModelSeeder = () => {
  ProjectModel.insertMany(
    projectData,
    { rawResult: true },
    function (err, docs) {
      // @ts-ignore: Unreachable code error
    }
  );
};
