import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)
let db;

try {
  await mongoClient.connect()
  db = mongoClient.db()
  console.log("Database Online")
} catch (error) {
  console.log('Deu errro no server')
}


export const votesCollection = db.collection("votes");
export const pollCollection = db.collection("polls");
export const choicesCollection = db.collection("polls");
