var MongoClient = require('mongodb').MongoClient;
console.log(process.env.MONGO_URL)
var url = "mongodb://my_mongo_Service:27017/mydb?replicaSet=rs0";

console.log(url)

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});