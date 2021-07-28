import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
import { UserRepository } from "../repositories/UserRepository";

interface IAuthenticateUser {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUser) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }
    console.log(user.password);
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email ou senha incorretos");
    }

    const token = jwt.sign(
      { id: user.id, nome: user.nome, email: user.email },
      process.env.JWT_SECRET || "",
      {
        expiresIn: "7d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
