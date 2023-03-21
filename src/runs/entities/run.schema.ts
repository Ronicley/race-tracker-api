import { randomUUID } from 'crypto';
import { Category } from 'src/categories/entities/category.entity';
import { Pilot } from 'src/pilots/entities/pilot.entity';
import { EntitySchema } from 'typeorm';
import { Run } from './run.entity';

export const RunSchema = new EntitySchema<Run>({
  name: 'Run',
  target: Run,
  columns: {
    id: {
      type: String,
      primary: true,
      default: randomUUID(),
    },
    time: {
      type: String,
    },
    pilot: {
      type: Number,
    },
    category: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: new Date().toISOString(),
    },
    updatedAt: {
      type: Date,
      nullable: true,
    },
  },
});
