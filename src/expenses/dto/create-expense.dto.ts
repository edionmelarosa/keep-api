import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateExpenseDto {
  @IsNotEmpty()
  @Field()
  name: string;

  @Field({nullable: true})
  description?: string

  @IsNotEmpty()
  @Field()
  amount: number

  @IsNotEmpty()
  @Field()
  category: number
}