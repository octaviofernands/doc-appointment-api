const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

export class MigrationAdapter {
  constructor() {
    this.conn = null;
    this.client = null;
  }

  async connect() {
    try {
      this.conn = await mongoose.createConnection(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
      this.client = this.conn.client.db(process.env.DB_NAME);
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