import { Run } from 'src/runs/entities/run.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Run, (run: Run) => run.category)
  runs: Run[];

  @Column({ default: new Date().toISOString() })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
