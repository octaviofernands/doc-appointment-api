import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { name as conditionModelName } from './schemas/condition.schema';

@Injectable()
@Dependencies(getModelToken(conditionModelName))
export class ConditionService {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    // ToDo: Caching layer
    try {
      const response = await this.model.find().sort('codeICD10').exec();

      const payload = {
        data: response
      };

      return payload;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
