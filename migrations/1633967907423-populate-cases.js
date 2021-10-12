import { MigrationAdapter } from './.utils/adapter';
import { promises as fsPromises } from 'fs';
import path from 'path';
import { CaseSchema, name as caseModelName } from '../src/case/schemas/case.schema';

const db = new MigrationAdapter(CaseSchema, caseModelName);

export const up = async () => {
  await db.connect();
  const basePath = path.resolve('./migrations/.data/cases');
  const dir = await fsPromises.readdir(basePath);

  const promises = dir.map(async (item) => {
    const fileBuffer = await fsPromises.readFile(`${basePath}/${item}`);
    const fileContent = fileBuffer.toString();
    return {
      description: fileContent
    };
  });

  const contents = await Promise.all(promises);

  await db.model.insertMany(contents);

  await db.disconnect();
};

export const down = async () => {
  await db.connect();
  //...
  await db.disconnect();
};