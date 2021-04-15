import { IsNotEmpty } from "class-validator";

export class ReportDto {
  @IsNotEmpty()
  from: string;

  @IsNotEmpty()
  to: string;
  
  isDaily: boolean;
  isMonthly: boolean;
  isYearly: boolean;
}