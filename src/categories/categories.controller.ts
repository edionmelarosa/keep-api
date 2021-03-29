import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories(@Param('id') offset: number, @Param('limit') limit: number): Promise<Category[]> {
    return this.categoriesService.getAllCategories(offset, limit);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoriesService.createCategory(createCategoryDto);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async updateCategory(@Param('id', ParseIntPipe) id: number,  @Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoriesService.updateCategory(id, createCategoryDto);
  }

  @Get('/:id')
  async getCategory(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return await this.categoriesService.getCategoryById(id);
  }

  @Delete('/:id')
  @HttpCode(204)
  @UsePipes(ValidationPipe)
  async deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.categoriesService.deleteCategory(id);
  }
}
