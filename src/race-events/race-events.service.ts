import { Injectable } from '@nestjs/common';
import { CreateRaceEventDto } from './dto/create-race-event.dto';
import { UpdateRaceEventDto } from './dto/update-race-event.dto';

@Injectable()
export class RaceEventsService {
  create(createRaceEventDto: CreateRaceEventDto) {
    return 'This action adds a new raceEvent';
  }

  findAll() {
    return `This action returns all raceEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} raceEvent`;
  }

  update(id: number, updateRaceEventDto: UpdateRaceEventDto) {
    return `This action updates a #${id} raceEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} raceEvent`;
  }
}
