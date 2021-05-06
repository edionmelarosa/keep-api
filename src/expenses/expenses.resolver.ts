import { Body, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense } from './expense.entity';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { FilterExpenseDto } from './dto/filter-expense.dto';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ExpenseType } from './expense.type';

@Resolver(of => ExpenseType)
export class ExpensesRevolver {
  constructor(private expensesService: ExpensesService) {}

  @UsePipes(ValidationPipe)
  @Query(returns => [ExpenseType])
  async expenses(@Args() filterExpenseDto: FilterExpenseDto): Promise<Expense[]> {
    return await this.expensesService.getAllExpenses(filterExpenseDto);
  }

  @UsePipes(ValidationPipe)
  @Query(returns => ExpenseType)
  async expense(@Args('id', ParseIntPipe) id: number): Promise<Expense> {
    return await this.expensesService.getExpenseById(id);
  }

  @UsePipes(ValidationPipe)
  @Mutation(returns => ExpenseType)
  async createExpense(@Args('createExpenseDto') createExpenseDto: CreateExpenseDto): Promise<Expense> {
    return await this.expensesService.createExpense(createExpenseDto);
  }

  @UsePipes(ValidationPipe)
  @Mutation(returns => ExpenseType)
  async updateExpense(@Args('id', ParseIntPipe) id: number,  @Args('updateExpenseDto') updateExpenseDto: UpdateExpenseDto): Promise<Expense> {
    return await this.expensesService.updateExpense(id, updateExpenseDto);
  }

  @Mutation(returns => ExpenseType)
  async deleteExpense(@Args('id', ParseIntPipe) id: number): Promise<Expense> {
    return await this.expensesService.deleteExpense(id);
  }
}
