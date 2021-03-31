import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
  CategoriesModule,
  ExpensesModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
})
export class AppModule {}
