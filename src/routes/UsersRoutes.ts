import { Router } from "express";

import { UsersControler } from "../modules/Users/Controller/UserController";

const userRoutes = Router();

const userControler = new UsersControler();

userRoutes.post("/users", userControler.create);

export { userRoutes };
