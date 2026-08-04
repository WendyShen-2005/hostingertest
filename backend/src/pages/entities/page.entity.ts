// page.entity.ts
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Partner } from './partner.entity';

@ObjectType()
@Entity('pages')
export class Page {
    @Field(() => ID)
    @PrimaryColumn({generated: "uuid"})
    page_id!: string;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    content?: string;

    @Field()
    @OneToOne(() => Partner)
    @JoinColumn({name: 'partner_id'})
    partner!: Partner;
}