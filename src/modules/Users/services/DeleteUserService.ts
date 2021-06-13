import { getCustomRepository } from "typeorm";

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
      console.log("Usuário não encontrado");
    }

    await userRepository.delete(id);
  }
}

export { DeleteUserService };
