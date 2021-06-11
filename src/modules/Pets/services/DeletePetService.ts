import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsUpdate {
  id: string;
}

class DeletePetService {
  async execute({ id }: IPetsUpdate) {
    const petsRepository = getCustomRepository(PetsRepository);

    const pet = await petsRepository.findOne({
      id,
    });

    if (!pet) {
      console.log("Pet não encontrado");
    }

    await petsRepository.delete(id);
  }
}

export { DeletePetService };
