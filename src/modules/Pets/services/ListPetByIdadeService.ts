import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  idade: string;
}

class ListPetByIdadeService {
  async execute({ idade }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pets = await petRepository.find({ idade });

    return pets;
  }
}

export { ListPetByIdadeService };
