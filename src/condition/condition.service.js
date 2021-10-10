import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { name as conditionModelName } from './schemas/condition.schema';

@Injectable()
@Dependencies(getModelToken(conditionModelName))
export class ConditionService {
  constructor(model) {
    this.conditionModel = model;
  }

  async findAll() {
    try {
      const response = await this.conditionModel.find().exec();

      const payload = {
        data: response
      };

      return payload;
    } catch (err) {
      console.log(err);
    }
  }
}
