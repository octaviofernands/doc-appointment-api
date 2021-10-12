import { Types } from 'mongoose';
import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { name as caseModelName } from './schemas/case.schema';

@Injectable()
@Dependencies(getModelToken(caseModelName))
export class CaseService {
  constructor(model) {
    this.model = model;
  }

  async findAllNotRated() {
    // ToDo: Caching layer, pagination
    try {
      const response = await this.model
        .find({
          ratedByDoctor: null
        })
        .exec();

      const payload = {
        data: response
      };

      return payload;
    } catch (err) {
      // ToDo: Error handling
      console.log(err);
      throw err;
    }
  }

  async rateCase(caseId, user, { condition }) {
    try {
      const dbCase = await this.model
        .findOne({
          _id: Types.ObjectId(caseId),
          ratedByDoctor: null
        })
        .exec();

      if(!dbCase) throw new Error('The case doesn\'t exists or is already rated.')
      
      //Todo: validate condition
      dbCase.ratedByDoctor = user.id;
      dbCase.condition = condition;

      const updated = await dbCase.save();

      return updated;
    } catch(err) {
      console.log(err);
      throw err;
    }
  }


}
