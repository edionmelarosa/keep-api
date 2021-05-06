import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

@InputType()
export class CreateCategoryDto {
  @IsNotEmpty()
  @Field()
  name: string;

  @Field({nullable: true})
  graphColor?: string

  @Field({nullable: true})
  maxAmount?: number
}