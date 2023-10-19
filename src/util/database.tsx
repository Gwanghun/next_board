import { MongoClient } from "mongodb";
const uri = "mongodb+srv://admin:lSUtYI7ymoAdSfek@cluster0.tw4d4pz.mongodb.net/?retryWrites=true&w=majority";
const options = { userNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }