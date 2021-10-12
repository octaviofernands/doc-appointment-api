import { Test } from '@nestjs/testing';
import { CaseService } from './case.service';

describe('CaseService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CaseService],
    }).compile();

    service = module.get(CaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
