import { Category } from 'src/categories/entities/category.entity';
import { Pilot } from 'src/pilots/entities/pilot.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Run {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pilot, (pilot: Pilot) => pilot.runs)
  pilot: number;

  @ManyToOne(() => Category, (category: Category) => category.runs)
  category: number;

  @Column()
  time: string;

  @Column({ default: new Date().toISOString() })
  createdAt: Date;

  @Column({ default: new Date().toISOString() })
  updatedAt: Date;
}
