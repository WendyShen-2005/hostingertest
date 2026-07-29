import { Field, InputType } from "@nestjs/graphql";
import {IsString, IsNotEmpty, IsOptional, IsUUID} from 'class-validator'

@InputType()
export class CreatePageInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    content!: string;

    @Field({nullable: true})
    @IsOptional()
    @IsUUID()
    partner_id?:string;
}

@InputType()
export class UpdatePageInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    content!: string;

    @Field({nullable: true})
    @IsOptional()
    @IsUUID()
    partner_id?:string;
}