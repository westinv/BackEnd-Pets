import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import "reflect-metadata";

@Entity("Pets")
class Pets {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  user_id: string;

  @Column()
  descricao: string;

  @Column()
  classe: string;

  @Column()
  idade: string;

  @Column()
  raca: string;

  @Column()
  status: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Pets };
