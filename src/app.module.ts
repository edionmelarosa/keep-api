import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
  CategoriesModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
})
export class AppModule {}
