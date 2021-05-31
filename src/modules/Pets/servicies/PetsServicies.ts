import { getCustomRepository } from "typeorm";
import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsCreate{
    nome: string
    descricao: string 
    classe : string 
    idade: string 
    raca : string 
    status : boolean
}

class PetsService{
    async create({nome, descricao, classe, idade, raca, status}: IPetsCreate){
    const petsRepository = getCustomRepository(PetsRepository);
    const pets = petsRepository.create({
        nome,
        descricao, 
        classe, 
        idade,
        raca, 
        status
    })
    await petsRepository.save(pets);
    }
}