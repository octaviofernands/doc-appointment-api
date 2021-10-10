import { Controller, Request, Bind, Get, Post, UseGuards, Dependencies } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @Bind(Request())
  async login(req) {
    return this.authService.login(req.user);
  }
}
