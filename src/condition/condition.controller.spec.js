import { Test } from '@nestjs/testing';
import { ConditionController } from './condition.controller';

describe('Condition Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ConditionController],
    }).compile();

    controller = module.get(ConditionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
