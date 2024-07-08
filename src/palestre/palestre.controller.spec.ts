import { Test, TestingModule } from '@nestjs/testing';
import { PalestreController } from './palestre.controller';

describe('PalestreController', () => {
  let controller: PalestreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalestreController],
    }).compile();

    controller = module.get<PalestreController>(PalestreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
