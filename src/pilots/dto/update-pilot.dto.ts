import { PartialType } from '@nestjs/mapped-types';
import { CreatePilotDto } from './create-pilot.dto';

export class UpdatePilotDto extends PartialType(CreatePilotDto) {}
