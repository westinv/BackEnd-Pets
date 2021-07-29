import * as dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";
import "reflect-metadata";
import { petsRoutes } from "./modules/Pets/routes/PetsRoutes";
import { authenticateUserRoutes } from "./modules/Users/routes/AuthenticateUserRoutes";
import { userRoutes } from "./modules/Users/routes/UsersRoutes";
import swaggerFile from "./swagger.json";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(userRoutes);
app.use(petsRoutes);
app.use(authenticateUserRoutes);

app.get("/", (request, response) => {
  response.status(200).json({ message: "Servidor online" });
});

app.listen(process.env.PORT || 3333, () => console.log("rodando"));
