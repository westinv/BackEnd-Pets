import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  raca: string;
}

class ListPetByRacaService {
  async execute({ raca }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pets = await petRepository.find({ raca });

    return pets;
  }
}

export { ListPetByRacaService };
