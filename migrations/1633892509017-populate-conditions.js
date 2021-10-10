import { MigrationAdapter } from './.utils/adapter';
import ConditionsPopulate from './.data/conditions.json';

const db = new MigrationAdapter();

export const up = async () => {
  await db.connect();
  await db.client.collection('conditions').insertMany(ConditionsPopulate);
  await db.disconnect();
};