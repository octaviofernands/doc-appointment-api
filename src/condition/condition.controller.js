import { Controller, Get, Dependencies } from '@nestjs/common';
import { ConditionService } from './condition.service';

@Controller('condition')
@Dependencies(ConditionService)
export class ConditionController {
  constructor(service) {
    console.log('OI');
    console.log(service);
    this.service = service;
  }

  @Get()
  async index() {
    console.log(1);
    return await this.service.findAll();
  }
}
