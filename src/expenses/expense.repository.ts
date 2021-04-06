import { EntityRepository, Repository } from "typeorm";
import { Expense } from './expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Category } from "src/categories/category.entity";
import { UpdateExpenseDto } from './dto/update-expense.dto';

@EntityRepository(Expense)
export class ExpenseRepository extends Repository<Expense> {
  async createExpense(category: Category, createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const {name, description, amount} = createExpenseDto;
    const expense = new Expense();
    expense.name = name;
    expense.description = description;
    expense.amount = amount;
    expense.category = category;
    await expense.save();

    return expense;
  }

  async updateExpense(expense: Expense, updateExpenseDto: UpdateExpenseDto): Promise<Expense> {
    const {name, description, amount} = updateExpenseDto;
    expense.name = name;
    expense.description = description;
    expense.amount = amount;
    await expense.save();

    return expense;
  }
}