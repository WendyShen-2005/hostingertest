// partner.entity.ts
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@Entity("partners")
export class Partner {
    @Field(() => ID)
    @PrimaryColumn({generated: "uuid"})
    partner_id!: string;

    @Field()
    @Column()
    name!: string;
}