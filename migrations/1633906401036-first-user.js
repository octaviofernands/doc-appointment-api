import { MigrationAdapter } from './.utils/adapter';
import { UserSchema, name as userModelName } from '../src/user/schemas/user.schema';

const db = new MigrationAdapter(UserSchema, userModelName);

export const up = async () => {
  await db.connect();

  const firstUser = {
    name: 'Dr. Joe Smith',
    email: 'joe.smith@email.com',
    password: 'admin123'
  };

  const user = new db.model(firstUser);

  await user.save();
  
  await db.disconnect();
};

export const down = async () => {
  await db.connect();
  //...
  await db.disconnect();
};