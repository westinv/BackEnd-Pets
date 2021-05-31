import { Router, request, response } from 'express';
import { getCustomRepository } from 'typeorm';
import { PetsController } from '../Controller/PetsController';


const petsRoutes = Router();

const petsController = new PetsController();

petsRoutes.post("/pets", petsController.create);

export {petsRoutes};