import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsUpdate {
  id: string;
  nome: string;
  descricao: string;
  classe: string;
  idade: string;
  raca: string;
  status: boolean;
  user_id: string;
}

class UpdatePetService {
  async execute({
    id,
    nome,
    descricao,
    classe,
    idade,
    raca,
    status,
    user_id,
  }: IPetsUpdate) {
    const petsRepository = getCustomRepository(PetsRepository);

    const pet = await petsRepository.findOne({
      id,
    });

    if (!pet) {
      console.log("Pet não encontrado");
    }

    const updatedPet = {
      ...pet,
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
      user_id,
    };

    await petsRepository.save(updatedPet);

    return updatedPet;
  }
}

export { UpdatePetService };
