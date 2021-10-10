import { Controller, Get, UseGuards, Dependencies } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConditionService } from './condition.service';

@Controller('condition')
@Dependencies(ConditionService)
export class ConditionController {
  constructor(service) {
    this.service = service;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async index() {
    return await this.service.findAll();
  }
}
