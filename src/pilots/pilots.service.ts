import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';
import { Pilot } from './entities/pilot.entity';

@Injectable()
export class PilotsService {
  constructor(
    @InjectRepository(Pilot)
    private pilotsRepository: Repository<Pilot>,
    private dataSource: DataSource,
  ) {}

  async create(createPilotDto: CreatePilotDto) {
    try {
      await this.pilotsRepository.save(createPilotDto);
    } catch (e) {
      Logger.error('Error on save pilot', e);
    }
  }

  findAll(): Promise<Pilot[]> {
    return this.pilotsRepository.find();
  }

  findOne(id: number): Promise<Pilot> {
    return this.pilotsRepository.findOneBy({ id });
  }

  update(id: number, updateCategoryDto: UpdatePilotDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number): Promise<void> {
    await this.pilotsRepository.delete(id);
  }
}
