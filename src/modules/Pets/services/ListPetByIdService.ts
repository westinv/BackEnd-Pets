import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
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

    if (!pet) {
      throw new AppError("Pets não encontrado");
    }

    return pet;
  }
}

export { ListPetByIdService };
