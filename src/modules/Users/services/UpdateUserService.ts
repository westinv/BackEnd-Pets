import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
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
      throw new AppError("Usuário não encontrado");
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
