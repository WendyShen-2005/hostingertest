import { MigrationInterface, Table, TableForeignKey } from "typeorm";
import { QueryRunner } from "typeorm/browser";

export class CreatePagesAndPartnersTable1700000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: 'partners',
                columns: [
                    {name: 'partner_id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'},
                    {name: 'name', type: 'varchar'}
                ]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'pages',
                columns: [
                    {name: 'page_id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default:'uuid_generate_v4()'},
                    {name: 'name', type: 'varchar'},
                    {name: 'content', type: 'text'},
                    {name: 'partner_id', type: 'uuid', isNullable: true}
                ]
            })
        )

        await queryRunner.createForeignKey(
            'pages',
            new TableForeignKey({
                columnNames: ['partner_id'],
                referencedColumnNames: ['partner_id'],
                referencedTableName: 'partners',
                onDelete: 'SET NULL',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable('pages');
        await queryRunner.dropTable('partners');
    }
}