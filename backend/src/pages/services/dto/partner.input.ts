import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreatePartnerInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name!:string;
}

@InputType()
export class UpdatePartnerInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name!:string;
}