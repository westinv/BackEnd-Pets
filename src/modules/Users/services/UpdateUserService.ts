import { getCustomRepository } from "typeorm";

import { UserRepository } from "../repositories/UserRepository";

interface IUserUpdate {
  id: string;
  nome: string;
  username: string;
  password: string;
  email: string;
  telefone: string;
}

class UpdateUserService {
  async execute({
    id,
    nome,
    username,
    password,
    email,
    telefone,
  }: IUserUpdate) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      id,
    });

    if (!user) {
      console.log("Usuário não encontrado");
    }

    const updatedUser = {
      ...user,
      id,
      nome,
      username,
      password,
      email,
      telefone,
    };

    await userRepository.save(updatedUser);

    return updatedUser;
  }
}

export { UpdateUserService };
