import { 
  Controller,
  Get,
  Post,
  Bind,
  Param,
  Req,
  Body,
  UseGuards,
  Dependencies
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CaseService } from './case.service';

@Controller('case')
@Dependencies(CaseService)
export class CaseController {
  constructor(service) {
    this.service = service;
  }
    
  @UseGuards(AuthGuard('jwt'))
  @Get('rate-list')
  async rateList() {
    return await this.service.findAllNotRated();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('rate/:id')
  @Bind(Param('id'), Req(), Body())
  async rateCase(id, { user }, body) {
    return await this.service.rateCase(id, user, body);
  }
}
