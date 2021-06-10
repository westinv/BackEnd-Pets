import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { UserRepository } from "../../../repositories/UserRepository";
import { UserService } from "../../../services/UserService";

class UsersControler {
  async create(request: Request, response: Response) {
    const { nome, username, password, Email, telefone } = request.body;

    const userServicies = new UserService();

    userServicies.create({
      nome,
      username,
      password,
      Email,
      telefone,
    });

    return response.status(201).send();
  }
  async listByUser(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const { Email } = request.body;

    const list = await userRepository.findOne({
      Email,
    });

    return response.send(list);
  }
  /* async update(request: Request, response: Response){
        const {id} = request.params;
        const {nome, username, password ,Email, telefone} = request.body;

        return response.status(201).send();

       
    }
    */
}
export { UsersControler };
