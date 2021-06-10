import { EntityRepository, Repository } from "typeorm";

import { Users } from "../model/Users";

@EntityRepository(Users)
// eslint-disable-next-line prettier/prettier
class UserRepository extends Repository<Users>{ }

export { UserRepository };
