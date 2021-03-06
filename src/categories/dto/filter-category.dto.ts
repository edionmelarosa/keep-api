import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class FilterCategoryDto {
  @Field({nullable: true})
  name?: string;
}