"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petsRoutes = void 0;
var express_1 = require("express");
var PetsController_1 = require("../Controller/PetsController");
var petsRoutes = express_1.Router();
exports.petsRoutes = petsRoutes;
var petsController = new PetsController_1.PetsController();
petsRoutes.post("/pets", petsController.create);
petsRoutes.get("/pets/:id", petsController.listPetById);
petsRoutes.put("/pets/:id", petsController.updatePet);
petsRoutes.get("/pets/classe/:classe", petsController.listPetByClass);
petsRoutes.get("/pets/idade/:idade", petsController.listPetByIdade);
petsRoutes.get("/pets/raca/:raca", petsController.listPetByRaca);
petsRoutes.get("/pets/status/:status", petsController.listPetByStatus);
petsRoutes.delete("/pets/:id", petsController.deletePet);
