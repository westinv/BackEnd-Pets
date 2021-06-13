import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { UserRepository } from "../repositories/UserRepository";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { UserService } from "../services/UserService";

class UsersControler {
  async create(request: Request, response: Response) {
    const { nome, username, password, email, telefone } = request.body;

    const userServicies = new UserService();

    userServicies.create({
      nome,
      username,
      password,
      email,
      telefone,
    });

    return response.status(201).send();
  }
  async listByUser(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const { email } = request.body;

    const list = await userRepository.findOne({
      email,
    });

    return response.send(list);
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
}

export { UsersControler };
