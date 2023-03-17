import { EntitySchema } from 'typeorm';
import { Category } from './category.entity';

export const CategorySchema = new EntitySchema<Category>({
  name: 'Category',
  target: Category,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
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
