import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { Income } from './income.entity';
import { FilterIncomeDto } from './dto/filter-income.dto';

@Controller('incomes')
export class IncomesController {
  constructor(private incomesService: IncomesService) {}

  @Get()
  async getAllIncomes(@Query() filterIncomeDto: FilterIncomeDto): Promise<Income[]> {
    return this.incomesService.getAllIncomes(filterIncomeDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createIncome(@Body() createIncomeDto: CreateIncomeDto): Promise<Income> {
    return await this.incomesService.createIncome(createIncomeDto);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async updateIncome(@Param('id', ParseIntPipe) id: number,  @Body() createIncomeDto: CreateIncomeDto): Promise<Income> {
    return await this.incomesService.updateIncome(id, createIncomeDto);
  }

  @Get('/:id')
  async getIncome(@Param('id', ParseIntPipe) id: number): Promise<Income> {
    return await this.incomesService.getIncomeById(id);
  }

  @Delete('/:id')
  @HttpCode(204)
  @UsePipes(ValidationPipe)
  async deleteIncome(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.incomesService.deleteIncome(id);
  }
}
