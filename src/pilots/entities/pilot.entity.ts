import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
