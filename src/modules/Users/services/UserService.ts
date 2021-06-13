import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";

import { UserRepository } from "../repositories/UserRepository";

interface IUserCreate {
  nome: string;
  username: string;
  password: string;
  email: string;
  telefone: string;
}

class UserService {
  async create({ nome, username, password, email, telefone }: IUserCreate) {
    const userRepository = getCustomRepository(UserRepository);
    const hashedPassword = await hash(password, 8);
    const user = userRepository.create({
      nome,
      username,
      password: hashedPassword,
      email,
      telefone,
    });
    await userRepository.save(user);
  }
}

export { UserService };
