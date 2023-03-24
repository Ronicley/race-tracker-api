import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';
import { Run } from './entities/run.entity';

@Injectable()
export class RunsService {
  constructor(
    @InjectRepository(Run)
    private runsRepository: Repository<Run>,
  ) {}

  async create(createRunDto: CreateRunDto) {
    try {
      const run = new Run();
      run.category = createRunDto.category;
      run.name = createRunDto.name;
      run.pilot = createRunDto.pilot;
      run.time = createRunDto.time;

      await this.runsRepository.save(run);
      return createRunDto;
    } catch (e) {
      Logger.error('Error on create', e);
    }
  }

  findAll() {
    return this.runsRepository.findAndCount();
  }

  findOne(id: number) {
    return `This action returns a #${id} run`;
  }

  update(id: number, updateRunDto: UpdateRunDto) {
    return `This action updates a #${id} run`;
  }

  remove(id: number) {
    return `This action removes a #${id} run`;
  }
}
