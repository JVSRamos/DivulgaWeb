'use strict';

import express, { Express, Request, Response } from 'express';

// Constants
const PORT = 8080;

// App
const app: Express = express();
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
