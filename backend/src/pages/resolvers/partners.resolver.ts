import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Partner } from "../entities/partner.entity";
import { PartnerService } from "../services/partners.service";
import { CreatePartnerInput, UpdatePartnerInput } from "../services/dto/partner.input";

@Resolver(() => Partner)
export class PartnerResolver {
    constructor(private readonly partnerService: PartnerService){}

    @Query(() => [Partner], {name: 'partners'})
    async getPartners(): Promise<Partner[]>{
        return this.partnerService.findAll();
    }

    @Query(() => Partner)
    async getPartner(@Args('id', {type:() => ID}) id: string): Promise<Partner>{
        return this.partnerService.findOne(id);
    }

    @Mutation(() => Partner)
    async createPartner(@Args('input') input: CreatePartnerInput): Promise<Partner> {
        return this.partnerService.create(input);
    }

    @Mutation(() => Partner)
    async updatePartner(
        @Args('id', {type: () => ID}) id: string,
        @Args('input') input: UpdatePartnerInput,
    ): Promise<Partner>{
        return this.partnerService.update(id, input);
    }

    @Mutation(() => Boolean)
    async deletePartner(@Args('id', {type: () => ID}) id: string): Promise<boolean> {
        return this.partnerService.remove(id);
    }
}