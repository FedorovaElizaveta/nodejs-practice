import express from 'express';

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

app.use((req, res, next) => {
  console.log('Second use');
  next();
});

app.use(express.json());

//! error middleware
// app.use((req, res, next) => {
//   throw new Error('Manual error');
// });
//!

app.get('/', (req, res) => {
  res.json({
    name: 'Robin',
    age: 21,
  });
});

app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
