import { ArgsType, Field } from "@nestjs/graphql";
import { IsDateString } from "class-validator";

@ArgsType()
export class FilterExpenseDto {
  @Field({nullable: true})
  name: string;

  @Field({nullable: true})
  category: number

  @Field({nullable: true})
  from: string
  
  @Field({nullable: true})
  to: string
}