import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaceEventsService } from './race-events.service';
import { CreateRaceEventDto } from './dto/create-race-event.dto';
import { UpdateRaceEventDto } from './dto/update-race-event.dto';

@Controller('race-events')
export class RaceEventsController {
  constructor(private readonly raceEventsService: RaceEventsService) {}

  @Post()
  create(@Body() createRaceEventDto: CreateRaceEventDto) {
    return this.raceEventsService.create(createRaceEventDto);
  }

  @Get()
  findAll() {
    return this.raceEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raceEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaceEventDto: UpdateRaceEventDto) {
    return this.raceEventsService.update(+id, updateRaceEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raceEventsService.remove(+id);
  }
}
