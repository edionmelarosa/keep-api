import { Field, ID, ObjectType } from "@nestjs/graphql";
import { type } from "node:os";
import { CategoryType } from '../categories/category.type';

@ObjectType('Expense')
export class ExpenseType {
  @Field(type => ID)
  id: string

  @Field()
  name: string

  @Field({nullable: true})
  description: string

  @Field()
  amount: number

  @Field(type => CategoryType)
  category: CategoryType

  @Field()
  createdAt: string

  @Field()
  updatedAt: string
}