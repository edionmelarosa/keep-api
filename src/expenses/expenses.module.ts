import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesService } from './expenses.service';
import { ExpenseRepository } from './expense.repository';
import { CategoriesService } from '../categories/categories.service';
import { CategoryRepository } from 'src/categories/category.repository';
import { ExpensesRevolver } from './expenses.resolver';

@Module({
  imports: [
TypeOrmModule.forFeature([ExpenseRepository, CategoryRepository])
  ],
  providers: [ExpensesService, CategoriesService, ExpensesRevolver],
})
export class ExpensesModule {}
