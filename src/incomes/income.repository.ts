import { EntityRepository, Repository } from "typeorm";
import { Income } from './income.entity';
import { CreateIncomeDto } from './dto/create-income.dto';

@EntityRepository(Income)
export class IncomeRepository extends Repository<Income> {

  async createIncome(createIncomeDto: CreateIncomeDto): Promise<Income> {
    const {name, description, amount} = createIncomeDto;
    const income = new Income();
    income.name = name;
    income.description = description;
    income.amount = amount;
    await income.save();

    return income;
  }

  async updateIncome(income: Income, createIncomeDto: CreateIncomeDto): Promise<Income> {
    const {name, description, amount} = createIncomeDto;
    income.name = name;
    income.description = description;
    income.amount = amount;
    await income.save();

    return income;
  }
}