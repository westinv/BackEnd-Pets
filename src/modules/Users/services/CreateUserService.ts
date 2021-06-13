import { getCustomRepository } from "typeorm";

import { UserRepository } from "../repositories/UserRepository";

interface IUserCreate {
  nome: string;
  username: string;
  password: string;
  email: string;
  telefone: string;
}

class CreateUserService {
  async execute({
    nome,
    username,
    password, 
    email,
    telefone
  }: IUserCreate) {
    const userRepository = getCustomRepository(UserRepository);
    const createdUser = userRepository.create({
      nome,
      username,
      password,
      email,
      telefone,
    });
    await userRepository.save(createdUser);

    return createdUser;
  }
}

export { CreateUserService };
