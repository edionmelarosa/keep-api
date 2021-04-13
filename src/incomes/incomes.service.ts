import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIncomeDto } from './dto/create-income.dto';
import { IncomeRepository } from './income.repository';
import { Income } from './income.entity';
import { FilterIncomeDto } from './dto/filter-income.dto';
import { FindOperator, Like } from 'typeorm';

@Injectable()
export class IncomesService {
  constructor(
    @InjectRepository(IncomeRepository) 
    private incomeRepository: IncomeRepository,
  ){}

  async getAllIncomes(filterIncomeDto: FilterIncomeDto): Promise<Income[]> {
    const {name} = filterIncomeDto;
    interface whereInterface {
      name?: FindOperator<string>,
    }

    const where: whereInterface = {}
    if (name) {
      where.name = Like(`%${name}%`)
    }

    return await this.incomeRepository.find({where});
  }

  async createIncome(createIncomeDto: CreateIncomeDto): Promise<Income> {
    return await this.incomeRepository.createIncome(createIncomeDto);
  }

  async updateIncome(id: number, createIncomeDto: CreateIncomeDto): Promise<Income> {
    const income = await this.getIncomeById(id);
    return await this.incomeRepository.updateIncome(income, createIncomeDto);
  }

  async deleteIncome(id: number): Promise<void> {
    const result = await this.incomeRepository.delete(id);
    
    if(result.affected === 0) {
      throw new NotFoundException('Income not found.');
    }
  }

  async getIncomeById(id: number): Promise<Income> {
    const income = await this.incomeRepository.findOne(id);

    if(!income) {
      throw new NotFoundException('Income not found.');
    }

    return income;
  }

}
