import { Router, request, response } from 'express';
import { getCustomRepository } from 'typeorm';
import { PetsController } from '../Controller/PetsController';


const petsRoutes = Router();

const petsController = new PetsController();

petsRoutes.post("/pets", petsController.create);

petsRoutes.get("/pets", petsController.listByPet);

export {petsRoutes};