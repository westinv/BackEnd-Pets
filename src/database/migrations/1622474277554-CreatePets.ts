import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePets1622474277554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Pets",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "descricao",
            type: "varchar",
          },
          {
            name: "classe",
            type: "varchar",
          },
          {
            name: "idade",
            type: "varchar",
          },
          {
            name: "raca",
            type: "varchar",
          },
          {
            name: "status",
            type: "boolean",
            default: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Pets");
  }
}
