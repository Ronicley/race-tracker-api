import { Module } from '@nestjs/common';
import { RunsService } from './runs.service';
import { RunsController } from './runs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Run } from "./entities/run.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Run])],
  controllers: [RunsController],
  providers: [RunsService],
})
export class RunsModule {}
