import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { getCustomRepository } from "typeorm";

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
      console.log("Email or password incorrect", 401);
      return "ok";
    }
    console.log(user.password);
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      console.log("Email or password incorrect", 401);
    }

    const token = jwt.sign(
      { id: user.id, nome: user.nome, email: user.email },
      "Renato",
      {
        expiresIn: "7d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
