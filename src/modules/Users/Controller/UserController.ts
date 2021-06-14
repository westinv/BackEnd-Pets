import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { UserRepository } from "../repositories/UserRepository";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateUserService } from "../services/CreateUserService";
import { DeleteUserService } from "../services/DeleteUserService";
import { ShowUserByEmailService } from "../services/ShowUserByEmailService";
import { UpdateUserService } from "../services/UpdateUserService";

class UsersControler {
  async create(request: Request, response: Response) {
    const { nome, username, password, email, telefone } = request.body;

    const createUserService = new CreateUserService();

    createUserService.execute({
      nome,
      username,
      password,
      email,
      telefone,
    });

    return response.status(201).send();
  }
  async showUserByEmail(request: Request, response: Response) {
    const showUserByEmail = new ShowUserByEmailService();
    const { email } = request.params;
    const user = await showUserByEmail.execute({
      email,
    });

    return response.json(user);
  }
  async authenticateUser(request: Request, response: Response) {
    try {
      const userRepository = getCustomRepository(UserRepository);
      const { email, password } = request.body;

      const authenticateUserService = new AuthenticateUserService();

      const authenticateInfo = await authenticateUserService.execute({
        email,
        password,
      });
      return response.status(200).json(authenticateInfo);
    } catch (error) {
      return response.status(500).send();
    }
  }

  async updateUser(request: Request, response: Response) {
    const updateUserService = new UpdateUserService();

    const { id } = request.params;
    const { nome, username, password, email, telefone } = request.body;

    const updatedUser = await updateUserService.execute({
      id,
      nome,
      username,
      password,
      email,
      telefone,
    });

    return response.status(201).json(updatedUser);
  }

  async deleteUser(request: Request, response: Response) {
    const deleteUserService = new DeleteUserService();

    const { id } = request.params;

    await deleteUserService.execute({
      id,
    });

    return response.status(201).send();
  }
}

export { UsersControler };
