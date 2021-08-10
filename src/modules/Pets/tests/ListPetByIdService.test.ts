// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection, QueryFailedError } from "typeorm";

import AppError from "../../../utils/AppError";
import { Pets } from "../model/Pets";
import { CreatePetService } from "../services/CreatePetService";
import { ListPetByIdService } from "../services/ListPetByIdService";

describe("ListPetByIdService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to list all pets by id", async () => {
    const nome = "Doguinho";
    const descricao = "Doguinho legal";
    const classe = "cachorro";
    const idade = "7";
    const raca = "boxer";
    const status = false;
    const user_id = "d2f619a7-b880-4b42-bd4c-880fef77a989";

    const createPetService = new CreatePetService();
    const listPetByIdService = new ListPetByIdService();

    const createdPet = await createPetService.execute({
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
      user_id,
    });

    const foundPet = await listPetByIdService.execute({
      id: createdPet.id || "",
    });

    expect(foundPet).toBeInstanceOf(Pets);
  });

  it("Should not be able to find an pet by invalid id", async () => {
    const id = `fake-id`;

    const listPetByIdService = new ListPetByIdService();

    await expect(listPetByIdService.execute({ id })).rejects.toBeInstanceOf(
      QueryFailedError
    );
  });
});
