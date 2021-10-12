import { Injectable, Dependencies } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
@Dependencies(UserService, JwtService)
export class AuthService {
  constructor(userService, JwtService) {
    this.userService = userService;
    this.jwtService = JwtService;
  }

  async validateUser(email, password) {
    const user = await this.userService.findByEmail(email);
    const isValid = await user.comparePassword(password);

    if (isValid) {
      const result = user.toObject();
      delete result.password;
      return result;
    }

    return null;
  }

  async login(user) {

    const payload = { username: user.email, sub: user._id.toString() };

    return {
      accessToken: this.jwtService.sign(payload)
    };
  }
}
