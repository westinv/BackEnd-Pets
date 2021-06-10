import { EntityRepository, Repository } from "typeorm";

import { Pets } from "../model/Pets";

@EntityRepository(Pets)
// eslint-disable-next-line prettier/prettier
class PetsRepository extends Repository<Pets> { }

export { PetsRepository };
