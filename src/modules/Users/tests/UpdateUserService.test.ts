// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { CreateUserService } from "../services/CreateUserService";
import { ShowUserByEmailService } from "../services/ShowUserByEmailService";
import { UpdateUserService } from "../services/UpdateUserService";

describe("UpdateUserService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to update an user", async () => {
    const nome = "jhon doe";
    const username = "jhondoe1";
    const password = "123";
    const email = `jhon@${Math.random() * 10000}.com`;
    const telefone = "(35)38234567";

    const createUserService = new CreateUserService();
    const showUserByEmailService = new ShowUserByEmailService();
    const updateUserService = new UpdateUserService();

    const createdUser = await createUserService.execute({
      nome,
      username,
      password,
      email,
      telefone,
    });

    const newNome = "Mary ann";
    const newUsername = "Maryann";
    const newPassword = "123";
    const newEmail = `mary@${Math.random() * 10000}.com`;
    const newTelefone = "(35)563829473";

    const id = createdUser.id || "";

    await updateUserService.execute({
      id,
      nome: newNome,
      username: newUsername,
      password: newPassword,
      email: newEmail,
      telefone: newTelefone,
    });

    const updatedUser = await showUserByEmailService.execute({
      email: newEmail,
    });

    expect(updatedUser.nome).toBe(newNome);
    expect(updatedUser.username).toBe(newUsername);
    expect(updatedUser.email).toBe(newEmail);
    expect(updatedUser.telefone).toBe(newTelefone);
  });

  it("Should not be able to update an unregistered user", async () => {
    const id = `d2f619a7-b880-4b42-bd4c-880fef77a989`;

    const updateUserService = new UpdateUserService();

    const newNome = "Mary ann";
    const newUsername = "Maryann";
    const newPassword = "123";
    const newEmail = "mary@ann.com";
    const newTelefone = "(35)563829473";

    await expect(
      updateUserService.execute({
        id,
        nome: newNome,
        username: newUsername,
        password: newPassword,
        email: newEmail,
        telefone: newTelefone,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
