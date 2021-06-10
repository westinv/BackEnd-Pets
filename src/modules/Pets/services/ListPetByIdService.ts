import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  id: string;
}

class ListPetByIdService {
  async execute({ id }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pet = await petRepository.findOne({
      id,
    });

    return pet;
  }
}

export { ListPetByIdService };
