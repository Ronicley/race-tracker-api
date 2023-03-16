import { Test, TestingModule } from '@nestjs/testing';
import { RacersController } from './racers.controller';
import { RacersService } from './racers.service';

describe('RacersController', () => {
  let controller: RacersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RacersController],
      providers: [RacersService],
    }).compile();

    controller = module.get<RacersController>(RacersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
