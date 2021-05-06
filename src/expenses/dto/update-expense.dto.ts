import { Field, InputType } from "@nestjs/graphql";
import { IsInstance, IsNotEmpty } from "class-validator";

@InputType()
export class UpdateExpenseDto {
  @IsNotEmpty()
  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string

  @Field({nullable: true})
  amount?: number

  @Field({nullable: true})
  category?: number
}