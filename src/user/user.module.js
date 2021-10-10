import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
// import { UserController } from './user.controller';
import { UserSchema, name as userModelName } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: userModelName, schema: UserSchema
    }]),
  ],
  providers: [UserService],
  exports: [UserService]
  // controllers: [UserController]
})
export class UserModule { }
