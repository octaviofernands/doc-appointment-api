const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

export class MigrationAdapter {
  constructor(schema = null, modelName = null) {
    this.conn = null;
    this.client = null;
    this.schema = schema;
    this.modelName = modelName;
    this.model = null;
  }

  async connect() {
    try {
      this.conn = await mongoose.createConnection(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
      this.client = this.conn.client.db(process.env.DB_NAME);

      if (this.schema && this.modelName) {
        this.model = this.conn.model(this.modelName, this.schema);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async disconnect() {
    try {
      await this.conn.close();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}