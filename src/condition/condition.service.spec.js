import { Test } from '@nestjs/testing';
import { ConditionService } from './condition.service';

describe('ConditionService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ConditionService],
    }).compile();

    service = module.get(ConditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
