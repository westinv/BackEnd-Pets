import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  idade: string;
}

class ListPetByIdadeService {
  async execute({ idade }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pets = await petRepository.find({ idade });

    if (!pets) {
      throw new AppError("Pets não encontrado");
    }

    return pets;
  }
}

export { ListPetByIdadeService };
