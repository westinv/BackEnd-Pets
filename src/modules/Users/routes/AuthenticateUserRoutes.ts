import { Router } from "express";

import { ensureAuthenticated } from "../../../middlewares/AuthenticateMiddleware";
import { UsersControler } from "../Controller/UserController";

const authenticateUserRoutes = Router();

const authenticateUserController = new UsersControler();

authenticateUserRoutes.post(
  "/sessions",

  authenticateUserController.authenticateUser
);

export { authenticateUserRoutes };
