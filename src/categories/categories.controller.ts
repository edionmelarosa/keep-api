import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoriesService.createCategory(createCategoryDto);
  }
}
