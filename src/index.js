import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

const app = express();

const PORT = 3000;

// Put the pino-http middleware the first
app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.get('/', (req, res, next) => {
  res.send('Hello');
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
