import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Expense } from '../expenses/expense.entity';
import { ExpenseType } from '../expenses/expense.type';

@ObjectType('Category')
export class CategoryType {
  @Field(type => ID)
  id: number;

  @Field()
  name: string;
  
  @Field()
  graphColor: string

  @Field({nullable: true})
  maxAmount: number

  @Field()
  createdAt: string

  @Field()
  updatedAt: string

  @Field(type => [ExpenseType], {nullable: true})
  expenses?: ExpenseType[]
}