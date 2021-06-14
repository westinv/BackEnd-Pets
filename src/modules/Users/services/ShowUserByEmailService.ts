import { getCustomRepository } from "typeorm";

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

    return user;
  }
}

export { ShowUserByEmailService };
