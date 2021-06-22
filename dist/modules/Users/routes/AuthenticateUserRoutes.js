"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUserRoutes = void 0;
var express_1 = require("express");
var UserController_1 = require("../Controller/UserController");
var authenticateUserRoutes = express_1.Router();
exports.authenticateUserRoutes = authenticateUserRoutes;
var authenticateUserController = new UserController_1.UsersControler();
authenticateUserRoutes.post("/sessions", authenticateUserController.authenticateUser);
