import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Page } from "../entities/page.entity";
import { Partner } from "../entities/partner.entity";
import { faker } from "@faker-js/faker";

export default class PageSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<void> {
        const partnerFactory = factoryManager.get(Partner);
        const pageFactory = factoryManager.get(Page);

        const partners = await partnerFactory.saveMany(5);

        for(let i = 0; i < 20; i++) {
            await pageFactory.save({
                partner: faker.helpers.arrayElement(partners),
            })
        }
    }
}