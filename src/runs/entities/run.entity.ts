import { PrimaryGeneratedColumn } from 'typeorm';

export class Run {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
