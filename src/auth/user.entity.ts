import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string
  
  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn({type: 'date'})
  createdAt: Date

  @UpdateDateColumn({type: 'date'})
  updatedAt: Date
}