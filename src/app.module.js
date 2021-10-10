import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConditionModule } from './condition/condition.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`),
    ConditionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
