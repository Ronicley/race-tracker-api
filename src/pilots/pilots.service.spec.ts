import { Test, TestingModule } from '@nestjs/testing';
import { PilotsService } from './pilots.service';

describe('PilotsService', () => {
  let service: PilotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PilotsService],
    }).compile();

    service = module.get<PilotsService>(PilotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
