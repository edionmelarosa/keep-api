import { IsNotEmpty } from "class-validator";

export class CreateExpenseDto {
  @IsNotEmpty()
  name: string;

  description: string

  @IsNotEmpty()
  amount: number

  @IsNotEmpty()
  category: number
}