import {Request, Response} from 'express'
import { getCustomRepository, getRepository } from 'typeorm';
import { PetsRepository } from '../repositories/PetsRepositories';
import { PetsService } from '../servicies/PetsServicies';

class PetsController{


    async create(request: Request, response: Response){

    const petsRepository = getCustomRepository(PetsRepository);
    const {nome, descricao, classe, idade, raca, status} = request.body;

    const petsService = new PetsService();

   
    petsService.create({
        nome, 
        descricao, 
        classe, 
        idade, 
        raca, 
        status
    });

    return response.status(201).send();
    }
}

export {PetsController}