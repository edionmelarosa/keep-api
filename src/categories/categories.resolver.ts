import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CategoryType } from './category.type';
import { FilterCategoryDto } from './dto/filter-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver(of => CategoryType)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @UsePipes(ValidationPipe)
  @Query(returns => [CategoryType])
  async categories(@Args() filterCategoryDto: FilterCategoryDto) {
    return await this.categoriesService.getAllCategories(filterCategoryDto);
  }

  @UsePipes(ValidationPipe)
  @Query(returns => CategoryType)
  async category(@Args('id') id: number) {
    return await this.categoriesService.getCategoryById(id);
  }

  @UsePipes(ValidationPipe)
  @Mutation(returns => CategoryType)
  async createCategory(@Args('createCategoryDto') createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoriesService.createCategory(createCategoryDto);
  }

  @UsePipes(ValidationPipe)
  @Mutation(returns => CategoryType)
  async updateCategory(@Args('id') id: number, @Args('createCategoryDto') createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoriesService.updateCategory(id, createCategoryDto);
  }

  @Mutation(returns => CategoryType)
  async deleteCategory(@Args('id') id: number): Promise<Category> {
    return await this.categoriesService.deleteCategory(id);
  }
}
