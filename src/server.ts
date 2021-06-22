import * as dotenv from "dotenv";
import express from "express";
import "./database";
import "reflect-metadata";

import { petsRoutes } from "./modules/Pets/routes/PetsRoutes";
import { authenticateUserRoutes } from "./modules/Users/routes/AuthenticateUserRoutes";
import { userRoutes } from "./modules/Users/routes/UsersRoutes";

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(petsRoutes);
app.use(authenticateUserRoutes);
app.listen(3333, () => console.log("rodando"));
