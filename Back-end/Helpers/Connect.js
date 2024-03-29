const { MongoClient } = require('mongodb');

const OPTIONS = {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017/PersonaManager';
//const MONGO_DB_URL = 'mongodb://mongodb:27017/PersonaManager';

const DB_NAME = 'StoreManager';

let db = null;

const connect = () =>
  db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    });

module.exports = connect;
