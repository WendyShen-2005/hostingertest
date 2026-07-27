import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @Get()
    getMeow(): string {
        return this.catsService.getMeow();
    }
}
