import express from 'express';
import bodyParser from 'body-parser';
import { listings } from './listings';

const app = express();

const PORT = 9000;

app.use(bodyParser.json());

const one = 1;
const two = 2;

app.get('/', (req, res) => res.send(`1 + 2 = ${one + two}`));

app.get('/listings', (req, res) => {
  return res.send(listings);
});

app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
  }

  return res.send('Failed to delete listing');
});

app.listen(PORT);
