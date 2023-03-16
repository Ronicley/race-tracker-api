import { Test, TestingModule } from '@nestjs/testing';
import { RacersService } from './racers.service';

describe('RacersService', () => {
  let service: RacersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RacersService],
    }).compile();

    service = module.get<RacersService>(RacersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
