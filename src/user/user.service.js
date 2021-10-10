import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { name as userModelName } from './schemas/user.schema';

@Injectable()
@Dependencies(getModelToken(userModelName))
export class UserService {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    // ToDo: Caching layer
    try {
      const response = await this.model.find().exec();

      const payload = {
        data: response
      };

      return payload;
    } catch (err) {
      console.log(err);
    }
  }

  async findByEmail(email) {
    try {
      const user = await this.model.findOne({email}).exec();
  
      return user;
    } catch (err) {
      console.log(err);
    }
  }
}
