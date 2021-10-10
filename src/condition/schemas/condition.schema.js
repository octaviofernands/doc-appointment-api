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