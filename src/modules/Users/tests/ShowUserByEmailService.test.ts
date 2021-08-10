// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { CreateUserService } from "../services/CreateUserService";
import { ShowUserByEmailService } from "../services/ShowUserByEmailService";

describe("ShowUserByService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to find an user", async () => {
    const nome = "jhon doe";
    const username = "jhondoe1";
    const password = "123";
    const email = `jhon@${Math.random() * 10000}.com`;
    const telefone = "(35)38234567";

    const createUserService = new CreateUserService();
    const showUserByEmailService = new ShowUserByEmailService();

    await createUserService.execute({
      nome,
      username,
      password,
      email,
      telefone,
    });

    const foundUser = await showUserByEmailService.execute({ email });

    expect(foundUser.nome).toBe(nome);
    expect(foundUser.username).toBe(username);
    expect(foundUser.email).toBe(email);
    expect(foundUser.telefone).toBe(telefone);
  });

  it("Should not be able to find an unregistered user", async () => {
    const email = `fake-email`;

    const showUserByEmailService = new ShowUserByEmailService();

    await expect(
      showUserByEmailService.execute({ email })
    ).rejects.toBeInstanceOf(AppError);
  });
});
