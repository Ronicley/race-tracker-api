import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorySchema } from './entities/category.schema';

@Module({
  imports: [TypeOrmModule.forFeature([CategorySchema])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
