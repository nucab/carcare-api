import MongoClient from 'mongodb';

MongoClient.connect('mongodb://localhost:27017/onlinetutorial', (err, connection) => {
  if(err) { console.log(err); }
  module.exports.db = connection;
});
