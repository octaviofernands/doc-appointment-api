import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionService } from './condition.service';
import { ConditionController } from './condition.controller';
import { ConditionSchema, name as conditionModelName } from './schemas/condition.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: conditionModelName, schema: ConditionSchema
    }]),
  ],
  providers: [ConditionService],
  controllers: [ConditionController]
})
export class ConditionModule { }
