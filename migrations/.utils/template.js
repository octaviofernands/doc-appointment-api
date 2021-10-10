import { MigrationAdapter } from './adapter';

const db = new MigrationAdapter();

export const up = async () => {
  await db.connect();
  //...
  await db.disconnect();
};

export const down = async () => {
  await db.connect();
  //...
  await db.disconnect();
};