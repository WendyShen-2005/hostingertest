import { setSeederFactory } from 'typeorm-extension';
import {Page} from '../entities/page.entity';

export const PageFactory = setSeederFactory (Page, (faker) => {
    const page = new Page();
    page.name = faker.company.catchPhrase();
    page.content = faker.lorem.paragraphs(3);
    return page;
})