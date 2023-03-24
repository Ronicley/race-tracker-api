import { Module } from '@nestjs/common';
import { PilotsService } from './pilots.service';
import { PilotsController } from './pilots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pilot } from "./entities/pilot.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Pilot])],
  controllers: [PilotsController],
  providers: [PilotsService],
})
export class PilotsModule {}
