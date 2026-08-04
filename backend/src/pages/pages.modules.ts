import { Module } from "@nestjs/common";
import { PagesController } from "./pages.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Page } from "./entities/page.entity";
import { Partner } from "./entities/partner.entity";
import { PageResolver } from "./resolvers/pages.resolver";
import { PageService } from "./services/pages.service";

@Module({
    imports: [TypeOrmModule.forFeature([Page, Partner])],
    controllers: [PagesController],
    providers: [PageService, PageResolver]
})
export class PagesModule{}