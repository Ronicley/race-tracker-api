import { Test, TestingModule } from '@nestjs/testing';
import { RaceEventsService } from './race-events.service';

describe('RaceEventsService', () => {
  let service: RaceEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaceEventsService],
    }).compile();

    service = module.get<RaceEventsService>(RaceEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
