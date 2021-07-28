import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
import { UserRepository } from "../repositories/UserRepository";

interface IUserList {
  email: string;
}

class ShowUserByEmailService {
  async execute({ email }: IUserList) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      email,
    });

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    return user;
  }
}

export { ShowUserByEmailService };
