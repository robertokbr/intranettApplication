import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTask1597756572396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'task',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'user_id',
                type: 'varchar',
              },
              {
                name: 'status',
                type: 'varchar',
                default:'Andamento'
              },
              {
                name: 'started_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'finished_at',
                type: 'timestamp',
                isNullable: true,
              },
              {
                name: 'cancellationReason',
                type: 'varchar',
                isNullable: true,
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('task');
      }

}
