import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CaseController } from './case.controller';
import { CaseService } from './case.service';
import { CaseSchema, name as caseModelName } from './schemas/case.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: caseModelName, schema: CaseSchema
    }]),
  ],
  controllers: [CaseController],
  providers: [CaseService]
})
export class CaseModule {}
