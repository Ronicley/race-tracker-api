import { Test, TestingModule } from '@nestjs/testing';
import { RaceEventsController } from './race-events.controller';
import { RaceEventsService } from './race-events.service';

describe('RaceEventsController', () => {
  let controller: RaceEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaceEventsController],
      providers: [RaceEventsService],
    }).compile();

    controller = module.get<RaceEventsController>(RaceEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
