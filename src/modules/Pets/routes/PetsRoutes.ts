import { Router } from "express";

import { PetsController } from "../Controller/PetsController";

const petsRoutes = Router();

const petsController = new PetsController();

petsRoutes.post("/pets", petsController.create);

petsRoutes.get("/pets/:id", petsController.listPetById);

petsRoutes.put("/pets/:id", petsController.updatePet);

export { petsRoutes };
