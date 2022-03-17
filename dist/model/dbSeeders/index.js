"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = require("../dbConnection");
const dbSeeder_1 = require("./dbSeeder");
(0, dbConnection_1.databaseConnection)();
(0, dbSeeder_1.userModelSeeder)();
