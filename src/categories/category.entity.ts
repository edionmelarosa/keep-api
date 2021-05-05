import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Expense } from '../expenses/expense.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({default: 'red'})
  graphColor: string

  @Column('decimal', {nullable: true})
  maxAmount: number

  @OneToMany(() => Expense, expense => expense.category)
  expenses: Expense[]
  
  @CreateDateColumn({type: 'date'})
  createdAt: Date

  @UpdateDateColumn({type: 'date'})
  updatedAt: Date
}