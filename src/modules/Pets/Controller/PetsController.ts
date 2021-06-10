import { Request, Response } from "express";

import { CreatePetService } from "../services/CreatePetService";
import { ListPetByIdService } from "../services/ListPetByIdService";

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
}

export { PetsController };
