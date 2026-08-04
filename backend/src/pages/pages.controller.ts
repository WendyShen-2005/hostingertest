import { Controller, Get } from "@nestjs/common";
import { PageService } from "./services/pages.service";

@Controller('pages')
export class PagesController {
    constructor(private readonly pagesService: PageService){}

    @Get()
    getRandomPage(): any {
        return this.pagesService.getRandomPage();
    }
}