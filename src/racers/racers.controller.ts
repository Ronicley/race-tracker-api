import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RacersService } from './racers.service';
import { CreateRacerDto } from './dto/create-racer.dto';
import { UpdateRacerDto } from './dto/update-racer.dto';

@Controller('racers')
export class RacersController {
  constructor(private readonly racersService: RacersService) {}

  @Post()
  create(@Body() createRacerDto: CreateRacerDto) {
    return this.racersService.create(createRacerDto);
  }

  @Get()
  findAll() {
    return this.racersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.racersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRacerDto: UpdateRacerDto) {
    return this.racersService.update(+id, updateRacerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.racersService.remove(+id);
  }
}
