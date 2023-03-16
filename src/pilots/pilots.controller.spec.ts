import { Test, TestingModule } from '@nestjs/testing';
import { PilotsController } from './pilots.controller';
import { PilotsService } from './pilots.service';

describe('PilotsController', () => {
  let controller: PilotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PilotsController],
      providers: [PilotsService],
    }).compile();

    controller = module.get<PilotsController>(PilotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
