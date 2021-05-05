import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class FilterCategoryArgs {
  @Field({nullable: true})
  name?: string;
}