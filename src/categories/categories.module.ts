import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories.service';
import { CategoryRepository } from './category.repository';
import { CategoriesResolver } from './categories.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepository])
  ],
  providers: [CategoriesService, CategoriesResolver],
})
export class CategoriesModule {}
