import { setSeederFactory } from "typeorm-extension";
import { Partner } from "../entities/partner.entity";

export const PartnerFactory = setSeederFactory(Partner, (faker) => {
    const partner = new Partner();
    partner.name = faker.person.firstName();
    return partner;
})