import { getCustomRepository } from "typeorm";

import AppError from "../../../utils/AppError";
import { UserRepository } from "../repositories/UserRepository";

interface IUserUpdate {
  id: string;
}

class DeleteUserService {
  async execute({ id }: IUserUpdate) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      id,
    });

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    await userRepository.delete(id);
  }
}

export { DeleteUserService };
