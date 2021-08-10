import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  raca: string;
}

class ListPetByRacaService {
  async execute({ raca }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pets = await petRepository.find({ raca });

    if (pets.length === 0) {
      throw new AppError("Pets não encontrado");
    }

    return pets;
  }
}

export { ListPetByRacaService };
