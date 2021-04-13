import { IsNotEmpty } from "class-validator";

export class CreateIncomeDto {
  @IsNotEmpty()
  name: string;

  description: string
  
  @IsNotEmpty()
  amount: number
}