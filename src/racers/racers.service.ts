import { Injectable } from '@nestjs/common';
import { CreateRacerDto } from './dto/create-racer.dto';
import { UpdateRacerDto } from './dto/update-racer.dto';

@Injectable()
export class RacersService {
  create(createRacerDto: CreateRacerDto) {
    return 'This action adds a new racer';
  }

  findAll() {
    return `This action returns all racers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} racer`;
  }

  update(id: number, updateRacerDto: UpdateRacerDto) {
    return `This action updates a #${id} racer`;
  }

  remove(id: number) {
    return `This action removes a #${id} racer`;
  }
}
