import { Test } from '@nestjs/testing';
import { CaseController } from './case.controller';

describe('Case Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [CaseController],
    }).compile();

    controller = module.get(CaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
