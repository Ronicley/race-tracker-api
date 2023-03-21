import { Module } from '@nestjs/common';
import { RunsService } from './runs.service';
import { RunsController } from './runs.controller';
import { RunSchema } from './entities/run.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RunSchema])],
  controllers: [RunsController],
  providers: [RunsService],
})
export class RunsModule {}
