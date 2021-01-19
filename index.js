var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://"+process.env.MONGO_URL+":27017/mydb?replicaSet=rs0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});