import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Income extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column('decimal')
  amount: number

  @CreateDateColumn({type: 'date'})
  createdAt: Date

  @UpdateDateColumn({type: 'date'})
  updatedAt: Date
}