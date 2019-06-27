const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({
    hello: 'Hello from the app',
  });
});
app.post('/register', (req, res) => {
  res.send({
    message: `hello ${req.body.name}${req.body.email}have register have fun `,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
