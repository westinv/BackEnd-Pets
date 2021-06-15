import { Request, Response } from "express";

import { CreatePetService } from "../services/CreatePetService";
import { DeletePetService } from "../services/DeletePetService";
import { ListPetByClassService } from "../services/ListPetByClassService";
import { ListPetByIdadeService } from "../services/ListPetByIdadeService";
import { ListPetByIdService } from "../services/ListPetByIdService";
import { ListPetByRacaService } from "../services/ListPetByRacaService";
import { ListPetByStatusService } from "../services/ListPetByStatusService";
import { UpdatePetService } from "../services/UpdatePetService";

class PetsController {
  async create(request: Request, response: Response) {
    const createPetService = new CreatePetService();

    await createPetService.execute(request.body);

    return response.status(201).send();
  }

  async listPetById(request: Request, response: Response) {
    const listPetById = new ListPetByIdService();

    const { id } = request.params;

    const pet = await listPetById.execute({ id });

    return response.status(201).json(pet);
  }

  async updatePet(request: Request, response: Response) {
    const updatePetService = new UpdatePetService();

    const { id } = request.params;
    const { nome, descricao, classe, idade, raca, status, user_id } =
      request.body;

    const updatedPet = await updatePetService.execute({
      id,
      user_id,
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
    });

    return response.status(201).json(updatedPet);
  }

  async listPetByClass(request: Request, response: Response) {
    const listPetByClass = new ListPetByClassService();

    const { classe } = request.params;

    const pets = await listPetByClass.execute({ classe });

    return response.status(201).json(pets);
  }

  async listPetByIdade(request: Request, response: Response) {
    const listPetByidade = new ListPetByIdadeService();

    const { idade } = request.params;

    const pets = await listPetByidade.execute({ idade });

    return response.status(201).json(pets);
  }

  async listPetByRaca(request: Request, response: Response) {
    const listPetByRaca = new ListPetByRacaService();

    const { raca } = request.params;

    const pets = await listPetByRaca.execute({ raca });

    return response.status(201).json(pets);
  }

  async listPetByStatus(request: Request, response: Response) {
    const listPetByStatus = new ListPetByStatusService();

    const { status } = request.params;

    const pets = await listPetByStatus.execute({ status });

    return response.status(201).json(pets);
  }

  async deletePet(request: Request, response: Response) {
    const deletePetService = new DeletePetService();

    const { id } = request.params;

    await deletePetService.execute({
      id,
    });

    return response.status(201).send();
  }
}

export { PetsController };
