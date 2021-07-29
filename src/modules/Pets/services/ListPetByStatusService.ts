import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  status: boolean;
}

class ListPetByStatusService {
  async execute({ status }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pets = await petRepository.find({ status });

    if (!pets) {
      throw new AppError("Pets não encontrado");
    }

    return pets;
  }
}

export { ListPetByStatusService };
