import mongoose from 'mongoose';

export const CaseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  condition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'condition'
  },
  ratedByDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  createdAt: {
    type: Date
  },
  ratedAt: {
    type: Date
  }
});

CaseSchema.pre('save', function () {
  if (this.isNew) {
    //ToDo: handle UTC
    this.createdAt = new Date().getTime();
  }
  if (this.isModified('ratedByDoctor')) {
    //ToDo: handle UTC
    this.ratedAt = new Date().getTime();
  }

  return;
});

CaseSchema.pre('insertMany', function (next, docs) {
  docs = docs.map((doc) => {
    doc.createdAt = new Date().getTime();

    return doc;
  })
  next();
});

export const name = 'case';