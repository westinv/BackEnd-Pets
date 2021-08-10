// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { CreateUserService } from "../services/CreateUserService";

describe("CreateUserService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to create an user", async () => {
    const nome = "jhon doe";
    const username = "jhondoe1";
    const password = "123";
    const email = `jhon@${Math.random() * 10000}.com`;
    const telefone = "(35)38234567";

    const createUserService = new CreateUserService();

    const createdUser = await createUserService.execute({
      nome,
      username,
      password,
      email,
      telefone,
    });

    expect(createdUser.nome).toBe(nome);
    expect(createdUser.username).toBe(username);
    expect(createdUser.email).toBe(email);
    expect(createdUser.telefone).toBe(telefone);
  });

  it("Should not be able to create user with duplicated email", async () => {
    const nome = "jhon doe";
    const username = "jhondoe1";
    const password = "123";
    const email = `jhon@${Math.random() * 10000}.com`;
    const telefone = "(35)38234567";

    const createUserService = new CreateUserService();

    await createUserService.execute({
      nome,
      username,
      password,
      email,
      telefone,
    });

    await expect(
      createUserService.execute({
        nome,
        username,
        password,
        email,
        telefone,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
