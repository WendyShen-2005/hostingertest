import { Injectable, NotFoundException } from "@nestjs/common";
import { Page } from "../entities/page.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePageInput, UpdatePageInput } from "./dto/page.input";

@Injectable()
export class PageService {
    constructor(
        @InjectRepository(Page)
        private readonly pageRepository: Repository<Page>,
    ){}

    async findAll(): Promise<Page[]> {
        return this.pageRepository.find({relations: ['partner']});
    }

    async findOne(page_id: string): Promise<Page> {
        const page = await this.pageRepository.findOne( {
            where: {page_id},
            relations: ['partner'],
        });
        if (!page) throw new NotFoundException(`Page with ID ${page_id} not found`);
        return page;
    }

    async create(input: CreatePageInput): Promise<Page> {
        const page = this.pageRepository.create(input);
        return this.pageRepository.save(page);
    }

    async update(page_id: string, input: UpdatePageInput): Promise<Page> {
        const page = await this.findOne(page_id);
        Object.assign(page, input);
        return this.pageRepository.save(page);
    }

    async remove(page_id: string): Promise<boolean> {
        const result = await this.pageRepository.delete(page_id);
        return (result.affected ?? 0) > 0;
    }
}