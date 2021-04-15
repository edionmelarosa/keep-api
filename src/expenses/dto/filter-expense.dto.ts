import { IsDateString } from "class-validator";

export class FilterExpenseDto {
  name: string;
  category: number

  @IsDateString()
  from: Date
  
  @IsDateString()
  to: Date
}