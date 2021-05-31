import { EntityRepository, Repository } from "typeorm";
import { Users } from "../modules/Users/model/Users";


@EntityRepository(Users)
class UserRepository extends Repository<Users>{}

export{UserRepository}