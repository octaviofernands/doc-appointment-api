import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConditionModule } from './condition/condition.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`),
    ConditionModule,
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
