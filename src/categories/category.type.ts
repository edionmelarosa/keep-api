import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Category')
export class CategoryType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
  
  @Field({nullable: true})
  description: string
}