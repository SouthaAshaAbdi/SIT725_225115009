const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

function isValidNumber(num) {
  return typeof num !== 'undefined' && !isNaN(num);
}

// GET: Add two numbers
app.get('/addTwoNumbers', (req, res) => {
  const { num1, num2 } = req.query;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isValidNumber(number1) && isValidNumber(number2)) {
    res.json({
      operation: 'addition',
      result: number1 + number2,
      statusCode: 200
    });
  } else {
    res.status(400).json({
      message: 'Invalid input. Please provide valid numbers.',
      statusCode: 400
    });
  }
});

// GET: Subtract two numbers
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isValidNumber(number1) && isValidNumber(number2)) {
    res.json({
      operation: 'subtraction',
      result: number1 - number2,
      statusCode: 200
    });
  } else {
    res.status(400).json({
      message: 'Invalid input. Please provide valid numbers.',
      statusCode: 400
    });
  }
});

// POST: Add two numbers
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isValidNumber(number1) && isValidNumber(number2)) {
    res.json({
      operation: 'addition (POST)',
      result: number1 + number2,
      statusCode: 200
    });
  } else {
    res.status(400).json({
      message: 'Invalid input. Please provide valid numbers.',
      statusCode: 400
    });
  }
});

// Start server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server;