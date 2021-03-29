import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;
  graphColor: string
  maxAmount: number
}