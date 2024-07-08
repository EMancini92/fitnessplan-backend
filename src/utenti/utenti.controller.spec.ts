import { Test, TestingModule } from '@nestjs/testing';
import { UtentiController } from './utenti.controller';

describe('UtentiController', () => {
  let controller: UtentiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtentiController],
    }).compile();

    controller = module.get<UtentiController>(UtentiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
