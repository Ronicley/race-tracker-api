import { Module } from '@nestjs/common';
import { RaceEventsService } from './race-events.service';
import { RaceEventsController } from './race-events.controller';

@Module({
  controllers: [RaceEventsController],
  providers: [RaceEventsService]
})
export class RaceEventsModule {}
