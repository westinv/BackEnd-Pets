import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
import { Users } from "../model/Users";
import { UserRepository } from "../repositories/UserRepository";

interface IUserCreate {
  nome: string;
  username: string;
  password: string;
  email: string;
  telefone: string;
}

class CreateUserService {
  public async execute({
    nome,
    username,
    password,
    email,
    telefone,
  }: IUserCreate): Promise<Users> {
    const userRepository = getCustomRepository(UserRepository);
    const hashedPassword = await hash(password, 8);

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError("Usuário já cadastrado");
    }

    const createdUser = userRepository.create({
      nome,
      username,
      password: hashedPassword,
      email,
      telefone,
    });

    await userRepository.save(createdUser);

    return createdUser;
  }
}

export { CreateUserService };
