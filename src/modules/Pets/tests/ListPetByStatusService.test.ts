// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { CreatePetService } from "../services/CreatePetService";
import { ListPetByStatusService } from "../services/ListPetByStatusService";

describe("ListPetByStatusService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to list all pets by status", async () => {
    const nome = "Doguinho";
    const descricao = "Doguinho legal";
    const classe = "cachorro";
    const idade = "7";
    const raca = "boxer";
    const status = false;
    const user_id = "d2f619a7-b880-4b42-bd4c-880fef77a989";

    const createPetService = new CreatePetService();
    const listPetByStatusService = new ListPetByStatusService();

    const createdPet = await createPetService.execute({
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
      user_id,
    });

    const foundPets = await listPetByStatusService.execute({
      status: createdPet.status || false,
    });

    const verifiedStatusFilter = foundPets.every(
      (pet) => pet.status === status
    );

    expect(verifiedStatusFilter).toBe(true);
  });
});
