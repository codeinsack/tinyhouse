import express from 'express';

const app = express();

const PORT = 9000;

const one = 1;
const two = 2;

app.get('/', (req, res) => res.send(`1 + 2 = ${one + two}`));

app.listen(PORT);
