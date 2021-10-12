import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConditionModule } from './condition/condition.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CaseModule } from './case/case.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`),
    ConditionModule,
    AuthModule,
    UserModule,
    CaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
