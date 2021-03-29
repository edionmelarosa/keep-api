import { EntityRepository, Repository } from "typeorm";
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const {name, graphColor, maxAmount} = createCategoryDto;
    const category = new Category();
    category.name = name;
    category.graphColor = graphColor;
    category.maxAmount = maxAmount;
    await category.save();

    return category;
  }

  async updateCategory(category: Category, createCategoryDto: CreateCategoryDto): Promise<Category> {
    const {name, graphColor, maxAmount} = createCategoryDto;
    category.name = name;
    category.graphColor = graphColor;
    category.maxAmount = maxAmount;
    await category.save();

    return category;
  }
}