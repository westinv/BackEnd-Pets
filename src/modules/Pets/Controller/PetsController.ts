import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { PetsRepository } from "../repositories/PetsRepositories";
import { PetsService } from "../services/PetsService";

class PetsController {
  async create(request: Request, response: Response) {
    const { nome, descricao, classe, idade, raca, status } = request.body;

    const petsService = new PetsService();

    petsService.create({
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
    });

    return response.status(201).send();
  }
  async listByPet(request: Request, response: Response) {
    const petRepository = getCustomRepository(PetsRepository);
    const { id } = request.body;

    const list = await petRepository.findOne({
      id,
    });

    return response.send(list);
  }
}

export { PetsController };
