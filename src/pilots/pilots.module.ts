import { Module } from '@nestjs/common';
import { PilotsService } from './pilots.service';
import { PilotsController } from './pilots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PilotSchema } from './entities/pilot.schema';

@Module({
  imports: [TypeOrmModule.forFeature([PilotSchema])],
  controllers: [PilotsController],
  providers: [PilotsService],
})
export class PilotsModule {}
