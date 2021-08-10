import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  classe: string;
}

class ListPetByClassService {
  async execute({ classe }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pets = await petRepository.find({ classe });

    if (pets.length === 0) {
      throw new AppError("Pets não encontrado");
    }

    return pets;
  }
}

export { ListPetByClassService };
