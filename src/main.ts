import z from 'zod';
import express from 'express';
const app = express();
app.use(express.json());
const port = 7777;

const isString = z.string();

import { MainController } from './main.ctrlr';

const main = new MainController();

app.post('/create', async (req: any, res: any) => {
    main.deposit_data();
    res.send('ok');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


