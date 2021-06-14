import { Router } from "express";

import { ensureAuthenticated } from "../../../middlewares/AuthenticateMiddleware";
import { UsersControler } from "../Controller/UserController";

const userRoutes = Router();

const userControler = new UsersControler();

userRoutes.post("/users", userControler.create);

userRoutes.get("/users/:email", userControler.showUserByEmail);

export { userRoutes };
