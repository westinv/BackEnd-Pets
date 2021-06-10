import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsCreate {
  nome: string;
  descricao: string;
  classe: string;
  idade: string;
  raca: string;
  status: boolean;
}

class CreatePetService {
  async execute({ nome, descricao, classe, idade, raca, status }: IPetsCreate) {
    const petsRepository = getCustomRepository(PetsRepository);
    const createdPet = petsRepository.create({
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
    });
    await petsRepository.save(createdPet);

    return createdPet;
  }
}

export { CreatePetService };
