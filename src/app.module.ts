import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PilotsModule } from './pilots/pilots.module';
import { CategoriesModule } from './categories/categories.module';
import { RaceEventsModule } from './race-events/race-events.module';
import { RunsModule } from './runs/runs.module';

import { Pilot } from './pilots/entities/pilot.entity';
import { RaceEvent } from './race-events/entities/race-event.entity';
import { Category } from './categories/entities/category.entity';
import { Run } from './runs/entities/run.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'race_tracker_db.sqlite',
      entities: [Pilot, Category, RaceEvent, Run],
      synchronize: true,
      autoLoadEntities: true,
      migrations: [],
    }),
    PilotsModule,
    CategoriesModule,
    RaceEventsModule,
    RunsModule,
  ],
})
export class AppModule {}
