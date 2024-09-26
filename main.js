const print = console.log,
couch = require('nano'),
redis = require('redis'),
maria = require('mariadb'),
mongo = require('mongodb'),
postgre = require('postgres'),

dbName = 'test', // universal dummy

// 1. Test connection to all DBs
// 1.1. Mongo
mongoURL = 'mongodb://localhost:27017',
mongoDB = new mongo.MongoClient(mongoURL)
mongoDB.connect()
.then(client => print(
  client.db(dbName)
  .collection('users')
  .find({}).toArray()
  .then(print)
))

// 1.2. Redis
// 1.3. Couch
// 1.4. Maria
// 1.5. Postgre

// 2. Try create coll/table on all DBs
// 3. Try single insert on all DBs
// 4. Try single delete on all DBs
// 5. Try single update on all DBs