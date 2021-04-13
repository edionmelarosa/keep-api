import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomesModule } from './incomes/incomes.module';

@Module({
  imports: [
CategoriesModule,
  ExpensesModule,
  IncomesModule,
  TypeOrmModule.forRoot(typeOrmConfig)
  ],
})
export class AppModule {}
