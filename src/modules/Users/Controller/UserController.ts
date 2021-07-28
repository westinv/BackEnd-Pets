import { Request, Response } from "express";

import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateUserService } from "../services/CreateUserService";
import { DeleteUserService } from "../services/DeleteUserService";
import { ShowUserByEmailService } from "../services/ShowUserByEmailService";
import { UpdateUserService } from "../services/UpdateUserService";

class UsersControler {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, username, password, email, telefone } = request.body;

      const createUserService = new CreateUserService();

      await createUserService.execute({
        nome,
        username,
        password,
        email,
        telefone,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async showUserByEmail(request: Request, response: Response) {
    try {
      const showUserByEmail = new ShowUserByEmailService();
      const { email } = request.params;
      const user = await showUserByEmail.execute({
        email,
      });

      return response.json(user);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async authenticateUser(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authenticateUserService = new AuthenticateUserService();

      const authenticateInfo = await authenticateUserService.execute({
        email,
        password,
      });
      return response.status(200).json(authenticateInfo);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async updateUser(request: Request, response: Response) {
    try {
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
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async deleteUser(request: Request, response: Response) {
    try {
      const deleteUserService = new DeleteUserService();

      const { id } = request.params;

      await deleteUserService.execute({
        id,
      });

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}

export { UsersControler };
