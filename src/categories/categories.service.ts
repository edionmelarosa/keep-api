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

  async getCategoryById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);

    if(!category) {
      throw new NotFoundException('Category not found.');
    }

    return category;
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.createCategory(createCategoryDto);
  }
}
