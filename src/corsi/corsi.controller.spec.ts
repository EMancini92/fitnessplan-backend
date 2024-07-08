import { Test, TestingModule } from '@nestjs/testing';
import { CorsiController } from './corsi.controller';

describe('CorsiController', () => {
  let controller: CorsiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorsiController],
    }).compile();

    controller = module.get<CorsiController>(CorsiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
