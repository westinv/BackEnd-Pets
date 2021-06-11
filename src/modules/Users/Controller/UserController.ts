import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { UserRepository } from "../repositories/UserRepository";
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
}
export { UsersControler };
