import { Run } from 'src/runs/entities/run.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pilot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => Run, (run: Run) => run.pilot)
  runs: Run[];
}
