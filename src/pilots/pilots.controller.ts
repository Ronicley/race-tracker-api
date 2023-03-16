import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PilotsService } from './pilots.service';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';

@Controller('pilots')
export class PilotsController {
  constructor(private readonly pilotsService: PilotsService) {}

  @Post()
  create(@Body() createPilotDto: CreatePilotDto) {
    return this.pilotsService.create(createPilotDto);
  }

  @Get()
  findAll() {
    return this.pilotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pilotsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePilotDto: UpdatePilotDto) {
    return this.pilotsService.update(+id, updatePilotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pilotsService.remove(+id);
  }
}
