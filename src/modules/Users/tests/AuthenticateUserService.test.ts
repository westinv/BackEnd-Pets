// eslint-disable-next-line @typescript-eslint/no-var-requires
import jwt from "jsonwebtoken";
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateUserService } from "../services/CreateUserService";

describe("AuthenticateUserService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able authenticate an user", async () => {
    const nome = "jhon doe";
    const username = "jhondoe1";
    const password = "123";
    const email = `jhon@${Math.random() * 10000}.com`;
    const telefone = "(35)38234567";

    const createUserService = new CreateUserService();
    const authenticateUserService = new AuthenticateUserService();

    await createUserService.execute({
      nome,
      username,
      password,
      email,
      telefone,
    });

    const authenticateInfo = await authenticateUserService.execute({
      email,
      password,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decodedUser: any = jwt.decode(authenticateInfo);

    const decodedEmail = decodedUser.email || "";
    const decodedNome = decodedUser.nome || "";

    expect(decodedEmail).toBe(email);
    expect(decodedNome).toBe(nome);
  });

  it("Should not be able to authenticate an unregistered user", async () => {
    const authenticateUserService = new AuthenticateUserService();

    await expect(
      authenticateUserService.execute({
        email: "fake-email",
        password: "fake-password",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an user with wrong password", async () => {
    const nome = "jhon doe";
    const username = "jhondoe1";
    const password = "123";
    const email = `jhon@${Math.random() * 10000}.com`;
    const telefone = "(35)38234567";

    const createUserService = new CreateUserService();
    const authenticateUserService = new AuthenticateUserService();

    await createUserService.execute({
      nome,
      username,
      password,
      email,
      telefone,
    });

    await expect(
      authenticateUserService.execute({
        email,
        password: "fake-password",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
