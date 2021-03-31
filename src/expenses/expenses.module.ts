import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesService } from './expenses.service';
import { ExpenseRepository } from './expense.repository';
import { CategoriesService } from '../categories/categories.service';
import { CategoryRepository } from 'src/categories/category.repository';

@Module({
  imports: [
  TypeOrmModule.forFeature([ExpenseRepository, CategoryRepository])
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService, CategoriesService],
})
export class ExpensesModule {}
