import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense } from './expense.entity';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { FilterExpenseDto } from './dto/filter-expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Get()
  async getAllExpenses(@Query() filterExpenseDto: FilterExpenseDto): Promise<Expense[]> {
    return this.expensesService.getAllExpenses(filterExpenseDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createExpense(@Body() createExpenseDto: CreateExpenseDto): Promise<Expense> {
    return await this.expensesService.createExpense(createExpenseDto);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async updateExpense(@Param('id', ParseIntPipe) id: number,  @Body() updateExpenseDto: UpdateExpenseDto): Promise<Expense> {
    return await this.expensesService.updateExpense(id, updateExpenseDto);
  }

  @Get('/:id')
  async getExpense(@Param('id', ParseIntPipe) id: number): Promise<Expense> {
    return await this.expensesService.getExpenseById(id);
  }

  @Delete('/:id')
  @HttpCode(204)
  @UsePipes(ValidationPipe)
  async deleteExpense(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.expensesService.deleteExpense(id);
  }
}
