import { Test, TestingModule } from '@nestjs/testing';
import { PalestreService } from './palestre.service';

describe('PalestreService', () => {
  let service: PalestreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalestreService],
    }).compile();

    service = module.get<PalestreService>(PalestreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
