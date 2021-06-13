import { getCustomRepository } from "typeorm";

import { UserRepository } from "../repositories/UserRepository";

interface IUserList {
    id: string;
}

class ListUserByIdService {
  async execute({ id }: IUserList) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      id,
    });

    return user;
  }
}

export { ListUserByIdService };