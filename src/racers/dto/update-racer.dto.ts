import { PartialType } from '@nestjs/mapped-types';
import { CreateRacerDto } from './create-racer.dto';

export class UpdateRacerDto extends PartialType(CreateRacerDto) {}
