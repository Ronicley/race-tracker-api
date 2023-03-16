import { Module } from '@nestjs/common';
import { PilotsModule } from './pilots/pilots.module';
import { CategoriesModule } from './categories/categories.module';
import { RacersModule } from './racers/racers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pilot } from './pilots/entities/pilot.entity';
import { Category } from './categories/entities/category.entity';
import { Racer } from './racers/entities/racer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'race_tracker_db.sqlite',
      entities: [Pilot, Category, Racer],
      synchronize: true,
      autoLoadEntities: true,
      migrations: [],
    }),
    PilotsModule,
    CategoriesModule,
    RacersModule,
  ],
})
export class AppModule {}
