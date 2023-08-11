const { MongoClient } = require("mongodb");

class ConnectToMongoDB {
  #DB_URL = "mongodb://0.0.0.0:27017/";
  #db = null;

  async #connect() {
    try {
      let client = new MongoClient(this.#DB_URL);
      let db = client.db("productList");
      return db;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getDB() {
    try {
      if (this.#db) {
        return this.#db;
      } else {
        this.#db = await this.#connect();
        return this.#db;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  closeDB() {
    try {
      if (this.#db) {
        this.#db.close();
      } else {
        console.log("Cnat Close");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = ConnectToMongoDB;
