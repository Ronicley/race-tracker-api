import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: new Date().toISOString() })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
