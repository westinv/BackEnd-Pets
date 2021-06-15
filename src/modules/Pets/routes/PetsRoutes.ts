import { Router } from "express";

import { PetsController } from "../Controller/PetsController";

const petsRoutes = Router();

const petsController = new PetsController();

petsRoutes.post("/pets", petsController.create);

petsRoutes.get("/pets/:id", petsController.listPetById);

petsRoutes.put("/pets/:id", petsController.updatePet);

petsRoutes.get("/pets/classe/:classe", petsController.listPetByClass);

petsRoutes.get("/pets/idade/:idade", petsController.listPetByIdade);

petsRoutes.get("/pets/raca/:raca", petsController.listPetByRaca);

petsRoutes.get("/pets/status/:status", petsController.listPetByStatus);

petsRoutes.delete("/pets/:id", petsController.deletePet);

export { petsRoutes };
