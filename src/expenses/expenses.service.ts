import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseRepository } from './expense.repository';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense } from './expense.entity';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(ExpenseRepository) 
    private expenseRepository: ExpenseRepository,
    private categoriesService: CategoriesService
  ){}

  async getAllExpenses(offset: number, limit: number): Promise<Expense[]> {
    return await this.expenseRepository.find();
  }

  async createExpense(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const {category} = createExpenseDto;
    const categoryFound = await this.categoriesService.getCategoryById(category);
    return await this.expenseRepository.createExpense(categoryFound, createExpenseDto);
  }

  async updateExpense(id: number, createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const expense = await this.getExpenseById(id);
    const {category} = createExpenseDto;
    const categoryFound = await this.categoriesService.getCategoryById(category);
    return await this.expenseRepository.updateExpense(categoryFound, expense, createExpenseDto);
  }

  async deleteExpense(id: number): Promise<void> {
    const result = await this.expenseRepository.delete(id);
    
    if(result.affected === 0) {
      throw new NotFoundException('Expense not found.');
    }
  }

  async getExpenseById(id: number): Promise<Expense> {
    const expense = await this.expenseRepository.findOne(id);

    if(!expense) {
      throw new NotFoundException('Expense not found.');
    }

    return expense;
  }
}
