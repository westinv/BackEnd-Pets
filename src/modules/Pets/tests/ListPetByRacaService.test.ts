// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { CreatePetService } from "../services/CreatePetService";
import { ListPetByRacaService } from "../services/ListPetByRacaService";

describe("ListPetByRacaService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to list all pets by raça", async () => {
    const nome = "Doguinho";
    const descricao = "Doguinho legal";
    const classe = "cachorro";
    const idade = "7";
    const raca = "boxer";
    const status = false;
    const user_id = "d2f619a7-b880-4b42-bd4c-880fef77a989";

    const createPetService = new CreatePetService();
    const listPetByRacaService = new ListPetByRacaService();

    const createdPet = await createPetService.execute({
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
      user_id,
    });

    const foundPets = await listPetByRacaService.execute({
      raca: createdPet.raca || "",
    });

    const verifiedRacaFilter = foundPets.every((pet) => pet.raca === raca);

    expect(verifiedRacaFilter).toBe(true);
  });

  it("Should not be able to find an pet by invalid raça", async () => {
    const raca = `fake-raça`;

    const listPetByRacaService = new ListPetByRacaService();

    await expect(listPetByRacaService.execute({ raca })).rejects.toBeInstanceOf(
      AppError
    );
  });
});
