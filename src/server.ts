import express, { Application, Request, Response } from 'express';

const app = express();

// get app default route for / path
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

const port: number = 8000;

app.listen(port, () => {
  console.log('server is running on port', port);
});
