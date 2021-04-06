import { IsInstance, IsNotEmpty } from "class-validator";

export class UpdateExpenseDto {
  @IsNotEmpty()
  name: string;

  description: string

  @IsNotEmpty()
  amount: number
}