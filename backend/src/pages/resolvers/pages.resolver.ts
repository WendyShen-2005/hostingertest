import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Page } from "../entities/page.entity";
import { PageService } from "../services/pages.service";
import { CreatePageInput, UpdatePageInput } from "../services/dto/page.input";

@Resolver(() => Page)
export class PageResolver {
    constructor(private readonly pageService: PageService){}

    @Query(() => [Page], {name: 'pages'})
    async getPages(): Promise<Page[]>{
        return this.pageService.findAll();
    }

    @Query(() => Page)
    async getPage(@Args('id', {type:() => ID}) id: string): Promise<Page> {
        return this.pageService.findOne(id);
    }

    @Query(() => Page)
    async getRandomPage(): Promise<Page> {
        return this.pageService.getRandomPage();
    }

    @Mutation(() => Page)
    async createPage(@Args('input') input: CreatePageInput): Promise<Page> {
        return this.pageService.create(input);
    }

    @Mutation(() => Page)
    async updatePage(
        @Args('id', {type: () => ID}) id: string,
        @Args('input') input: UpdatePageInput,
    ): Promise<Page> {
        return this.pageService.update(id, input);
    }

    @Mutation(() => Boolean)
    async deletePage(@Args('id', {type: () => ID}) id: string): Promise<boolean> {
        return this.pageService.remove(id);
    }
}