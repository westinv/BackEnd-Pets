import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import "reflect-metadata";

@Entity("Users")
class Users {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telefone: string;

  @Column()
  username: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Users };
