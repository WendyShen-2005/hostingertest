import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Partner } from "../entities/partner.entity";
import { Repository } from "typeorm";
import { CreatePartnerInput, UpdatePartnerInput } from "./dto/partner.input";

@Injectable()
export class PartnerService {
    constructor(
        @InjectRepository(Partner)
        private readonly partnerRepository: Repository<Partner>,
    ){}

    async findAll(): Promise<Partner[]> {
        return this.partnerRepository.find();
    }

    async findOne(partner_id: string): Promise<Partner> {
        const partner = await this.partnerRepository.findOne({
            where: {partner_id}
        })
        if(!partner) throw new NotFoundException(`Partner with ID ${partner_id} not found`);
        return partner;
    }

    async create(input: CreatePartnerInput): Promise<Partner> {
        const partner = this.partnerRepository.create(input);
        return this.partnerRepository.save(partner);
    }

    async update(partner_id: string, input: UpdatePartnerInput): Promise<Partner> {
        const partner = await this.findOne(partner_id);
        Object.assign(partner, input);
        return this.partnerRepository.save(partner);
    }

    async remove(partner_id: string): Promise<boolean> {
        const result = await this.partnerRepository.delete(partner_id);
        return (result.affected ?? 0) > 0;
    }
}