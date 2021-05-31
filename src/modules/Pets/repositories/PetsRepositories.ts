import { EntityRepository, Repository } from "typeorm";
import { Pets } from "../model/Pets";


@EntityRepository(Pets)
class PetsRepository extends Repository<Pets>{}

export {PetsRepository};