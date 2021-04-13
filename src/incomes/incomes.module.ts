import { Module } from '@nestjs/common';
import { IncomesController } from './incomes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomesService } from './incomes.service';
import { IncomeRepository } from './income.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([IncomeRepository])
  ],
  controllers: [IncomesController],
  providers: [IncomesService],
})
export class IncomesModule {}
