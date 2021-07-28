import { Router } from "express";

import { UsersControler } from "../Controller/UserController";

const userRoutes = Router();

const userControler = new UsersControler();

userRoutes.post("/users", userControler.create);

userRoutes.get("/users/:email", userControler.showUserByEmail);

userRoutes.put("/users/:id", userControler.updateUser);

userRoutes.delete("/users/:id", userControler.deleteUser);

export { userRoutes };
