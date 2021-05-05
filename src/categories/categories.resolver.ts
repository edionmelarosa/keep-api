import { Resolver, Query } from '@nestjs/graphql';
import { CategoryType } from './category.type';

@Resolver(of => CategoryType)
export class CategoriesResolver {
  @Query(returns => CategoryType)
  category() {
    return {
      id: 'klasdjfklajdf',
      name: 'Test name',
      description: 'Test description'
    }
  }
}
