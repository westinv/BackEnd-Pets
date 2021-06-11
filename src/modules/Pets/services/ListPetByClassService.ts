import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  classe: string;
}

class ListPetByClassService {
  async execute({ classe }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pets = await petRepository.find({ classe });

    return pets;
  }
}

export { ListPetByClassService };
