import { IsInstance, IsNotEmpty } from "class-validator";
import { Category } from "src/categories/category.entity";

export class CreateExpenseDto {
  @IsNotEmpty()
  name: string;

  description: string

  @IsNotEmpty()
  amount: number

  @IsNotEmpty()
  category: number
}