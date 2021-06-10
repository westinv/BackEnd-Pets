import { Request, Response } from "express";

import { CreatePetService } from "../services/CreatePetService";
import { ListPetByIdService } from "../services/ListPetByIdService";
import { UpdatePetService } from "../services/UpdatePetService";

class PetsController {
  async create(request: Request, response: Response) {
    const createPetService = new CreatePetService();

    createPetService.execute(request.body);

    return response.status(201).send();
  }

  async listPetById(request: Request, response: Response) {
    const listPetById = new ListPetByIdService();

    const { id } = request.params;

    const pet = listPetById.execute({ id });

    return response.status(201).json(pet);
  }

  async updatePet(request: Request, response: Response) {
    const updatePetService = new UpdatePetService();

    const { id } = request.params;
    const { nome, descricao, classe, idade, raca, status } = request.body;

    updatePetService.execute({
      id,
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
    });

    return response.status(201).send();
  }
}

export { PetsController };
