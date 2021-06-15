import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";

interface IPetsList {
  status: boolean;
}

class ListPetByStatusService {
  async execute({ status }: IPetsList) {
    const petRepository = getCustomRepository(PetsRepository);

    const pets = await petRepository.find({ status });

    return pets;
  }
}

export { ListPetByStatusService };
