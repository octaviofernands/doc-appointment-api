// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema()
// export class Condition {
//   @Prop()
//   codeICD10: String;
// }








import mongoose from 'mongoose';

export const ConditionSchema = new mongoose.Schema({
  codeICD10: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  }
});

export const name = 'condition';

// export const ConditionModel = mongoose.model('condition', ConditionSchema);

// export interface Condition {
//     id: String;
//     codeICD10: String;

// }

// export type TodoDocument = Todo & Document;

// @Schema()
// export class Todo {
//   @Prop({ required: true })
//   title: string;

//   @Prop()
//   description?: string;

//   @Prop()
//   completedAt?: Date;

//   @Prop({ required: true })
//   createdAt: Date;

//   @Prop()
//   deletedAt?: Date;
// }

// export const TodoSchema = SchemaFactory.createForClass(Todo);