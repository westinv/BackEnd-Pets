// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import { CreatePetService } from "../services/CreatePetService";

describe("CreatePetService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to create an user", async () => {
    const nome = "Doguinho";
    const descricao = "Doguinho legal";
    const classe = "cachorro";
    const idade = "7";
    const raca = "boxer";
    const status = false;
    const user_id = "d2f619a7-b880-4b42-bd4c-880fef77a989";

    const createPetService = new CreatePetService();

    const createdPet = await createPetService.execute({
      nome,
      descricao,
      classe,
      idade,
      raca,
      status,
      user_id,
    });

    expect(createdPet.nome).toBe(nome);
    expect(createdPet.descricao).toBe(descricao);
    expect(createdPet.classe).toBe(classe);
    expect(createdPet.idade).toBe(idade);
    expect(createdPet.raca).toBe(raca);
    expect(createdPet.status).toBe(status);
    expect(createdPet.user_id).toBe(user_id);
  });
});
