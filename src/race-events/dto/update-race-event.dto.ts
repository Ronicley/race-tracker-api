import { PartialType } from '@nestjs/mapped-types';
import { CreateRaceEventDto } from './create-race-event.dto';

export class UpdateRaceEventDto extends PartialType(CreateRaceEventDto) {}
