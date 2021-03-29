import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryRepository) 
    private categoryRepository: CategoryRepository,
  ){}

  async getAllCategories(offset: number, limit: number): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.createCategory(createCategoryDto);
  }

  async updateCategory(id: number, createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this.getCategoryById(id);
    return await this.categoryRepository.updateCategory(category, createCategoryDto);
  }

  async deleteCategory(id: number): Promise<void> {
    const result = await this.categoryRepository.delete(id);
    
    if(result.affected === 0) {
      throw new NotFoundException('Category not found.');
    }
  }

  async getCategoryById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);

    if(!category) {
      throw new NotFoundException('Category not found.');
    }

    return category;
  }

}
