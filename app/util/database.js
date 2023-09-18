import { MongoClient } from 'mongodb';
const pwd = '6U4GCrJrnkbhUJgd';
const url = 'mongodb+srv://jsshin6246:' + pwd + '@cluster0.kmyyisz.mongodb.net/';
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
