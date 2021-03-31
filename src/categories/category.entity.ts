import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expense } from '../expenses/expense.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  graphColor: string

  @Column('decimal')
  maxAmount: number

  @OneToMany(() => Expense, expense => expense.category)
  expenses: Expense[]
  
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}