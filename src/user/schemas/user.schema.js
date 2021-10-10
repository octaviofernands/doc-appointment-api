import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true,
    index: true
  }
});

UserSchema.pre('save', async function() {
  if(!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(this.password, salt);

  this.password = hash;

  return;
});

UserSchema.methods.comparePassword = async function(strPassword) {
  const match = await bcrypt.compare(strPassword, this.password);

  return match;
};

export const name = 'user';