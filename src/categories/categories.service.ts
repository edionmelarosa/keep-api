import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
import { FilterCategoryDto } from './dto/filter-category.dto';
import { Like, FindOperator } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryRepository) 
    private categoryRepository: CategoryRepository,
  ){}

  async getAllCategories(filterCategoryDto: FilterCategoryDto): Promise<Category[]> {
    const {name} = filterCategoryDto;
    interface whereInterface {
      name?: FindOperator<String>
    }

    const where: whereInterface = {}
    if (name) {
      where.name = Like(`%${name}%`);
    }

    return await this.categoryRepository.find({
      where,
      relations: ['expenses'],
      order: {
        id: "DESC"
      }
    });
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.createCategory(createCategoryDto);
  }

  async updateCategory(id: number, createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this.getCategoryById(id);
    return await this.categoryRepository.updateCategory(category, createCategoryDto);
  }

  async deleteCategory(id: number): Promise<Category> {
    const category = await this.getCategoryById(id);
    
    if(!category) {
      throw new NotFoundException('Category not found.');
    }

    await this.categoryRepository.delete(id);

    return category;
  }

  async getCategoryById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne(id, {
      relations: ['expenses']
    });

    if(!category) {
      throw new NotFoundException('Category not found.');
    }

    return category;
  }

}
