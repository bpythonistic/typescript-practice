import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv';
import {main, practiceCollections} from './Collections.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 5000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.status(200).send(main());
});

app.get('/collections', (req: Request, res: Response) => {
  const collections = practiceCollections();
  const responseObj: Record<string, any> = {};
  collections.forEach((value, key) => {
    responseObj[key] = value;
  });
  res.status(200).json(responseObj);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
