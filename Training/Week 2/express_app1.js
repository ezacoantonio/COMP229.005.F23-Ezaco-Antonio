
const express = require('express');
const app = express();

// Middleware 1: Logging
app.use((req, res, next) => {
  console.log('This is a logging middleware');
  next();
});

// Middleware 2: Authentication
app.use((req, res, next) => {
  console.log('This is an authentication middleware');
  next();
});

// Final Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
