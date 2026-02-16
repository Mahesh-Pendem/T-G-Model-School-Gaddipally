const { MongoClient } = require('mongodb');

let cached = global.mongo;
if (!cached) cached = global.mongo = { conn: null, promise: null };

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri).then((client) => client);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

async function getDb() {
  const client = await connectToDatabase();
  return client.db(process.env.MONGODB_DB || 'tgms');
}

module.exports = { connectToDatabase, getDb };
