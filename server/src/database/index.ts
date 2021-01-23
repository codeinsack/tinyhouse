import { MongoClient } from 'mongodb';
import { Database } from '../lib/types';

const url =
  'mongodb+srv://rind:19561989ai@cluster0.3fwrv.mongodb.net/main?retryWrites=true&w=majority';

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db('main');

  return {
    listings: db.collection('listings'),
  };
};
