// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { CreatePetService } from "../services/CreatePetService";
import { DeletePetService } from "../services/DeletePetService";
import { ListPetByIdService } from "../services/ListPetByIdService";

describe("DeletePetService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to delete a pet", async () => {
    const nome = "Doguinho";
    const descricao = "Doguinho legal";
    const classe = "cachorro";
    const idade = "7";
    const raca = "boxer";
    const status = false;
    const user_id = "d2f619a7-b880-4b42-bd4c-880fef77a989";

    const createPetService = new CreatePetService();
    const deletePetService = new DeletePetService();
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

    await deletePetService.execute({ id: createdPet.id || "" });

    await expect(
      listPetByIdService.execute({
        id: createdPet.id || "",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to delete an unregistered pet", async () => {
    const id = `d2f619a7-b880-4b42-bd4c-880fef77a989`;

    const deletePetService = new DeletePetService();

    await expect(deletePetService.execute({ id })).rejects.toBeInstanceOf(
      AppError
    );
  });
});
