import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      await this.categoriesRepository.save({
        name: createCategoryDto.name,
      });
    } catch (e) {
      console.log(e);
    }
  }

  findAll() {
    return this.categoriesRepository.findAndCount();
  }

  findOne(id: number) {
    return this.categoriesRepository.findOneByOrFail({ id });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return this.categoriesRepository.delete(id);
  }
}
