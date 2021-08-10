// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createConnections, getConnection } from "typeorm";

import AppError from "../../../utils/AppError";
import { CreateUserService } from "../services/CreateUserService";
import { DeleteUserService } from "../services/DeleteUserService";
import { ShowUserByEmailService } from "../services/ShowUserByEmailService";

describe("DeleteUserService", () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
  });

  it("Should be able to delete an user", async () => {
    const nome = "jhon doe";
    const username = "jhondoe1";
    const password = "123";
    const email = `jhon@${Math.random() * 10000}.com`;
    const telefone = "(35)38234567";

    const createUserService = new CreateUserService();
    const showUserByEmailService = new ShowUserByEmailService();
    const deleteUserService = new DeleteUserService();

    const createdUser = await createUserService.execute({
      nome,
      username,
      password,
      email,
      telefone,
    });

    await deleteUserService.execute({ id: createdUser.id || "" });

    await expect(
      showUserByEmailService.execute({ email })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to delete an unregistered user", async () => {
    const id = `d2f619a7-b880-4b42-bd4c-880fef77a989`;

    const deleteUserService = new DeleteUserService();

    await expect(deleteUserService.execute({ id })).rejects.toBeInstanceOf(
      AppError
    );
  });
});
