// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { CreatePetService } from "../services/CreatePetService";
import { ListPetByIdadeService } from "../services/ListPetByIdadeService";

describe("ListPetByIdadeService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to list all pets by idade", async () => {
    const nome = "Doguinho";
    const descricao = "Doguinho legal";
    const classe = "cachorro";
    const idade = "7";
    const raca = "boxer";
    const status = false;
    const user_id = "d2f619a7-b880-4b42-bd4c-880fef77a989";

    const createPetService = new CreatePetService();
    const listPetByIdadeService = new ListPetByIdadeService();

    const createdPet = await createPetService.execute({
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
      user_id,
    });

    const foundPets = await listPetByIdadeService.execute({
      idade: createdPet.idade || "",
    });

    const verifiedIdadeFilter = foundPets.every((pet) => pet.idade === idade);

    expect(verifiedIdadeFilter).toBe(true);
  });

  it("Should not be able to find an pet by invalid class", async () => {
    const idade = `fake-idade`;

    const listPetByIdadeService = new ListPetByIdadeService();

    await expect(
      listPetByIdadeService.execute({ idade })
    ).rejects.toBeInstanceOf(AppError);
  });
});
