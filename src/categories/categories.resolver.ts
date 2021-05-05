import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CategoryType } from './category.type';
import { FilterCategoryDto } from './dto/filter-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Resolver(of => CategoryType)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @Query(returns => [CategoryType])
  async categories(@Args() filterCategoryDto: FilterCategoryDto) {
    return await this.categoriesService.getAllCategories(filterCategoryDto);
  }

  @Query(returns => CategoryType)
  async category(@Args('id') id: number) {
    return await this.categoriesService.getCategoryById(id);
  }

  @Mutation(returns => CategoryType)
  async createCategory(@Args('createCategoryDto') createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoriesService.createCategory(createCategoryDto);
  }

  @Mutation(returns => CategoryType)
  async updateCategory(@Args('id') id: number, @Args('createCategoryDto') createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoriesService.updateCategory(id, createCategoryDto);
  }

  @Mutation(returns => CategoryType)
  async deleteCategory(@Args('id') id: number): Promise<Category> {
    return await this.categoriesService.deleteCategory(id);
  }
}
