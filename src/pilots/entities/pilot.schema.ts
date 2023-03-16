import { EntitySchema } from 'typeorm';
import { Pilot } from './pilot.entity';

export const PilotSchema = new EntitySchema<Pilot>({
  name: 'Pilot',
  target: Pilot,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      nullable: true,
    },
  },
});
