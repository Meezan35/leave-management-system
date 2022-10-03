const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const users = require('./database.json');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

console.log(users);
app.post('/login', function (req, res) {
  let result = users.find((user) => user.email === req.body.email);
  console.log(result);
  if (result) {
    if (result.password === req.body.password) {
      res.status(200).send({
        message: 'Successfull',
        role: result.role,
        name: result.name,
        id: result.id,
        success: true,
      });
    } else {
      res.status(200).send({
        message: ' Password Incorrect',
        success: false,
      });
    }
  } else {
    res.status(200).send({
      message: ' User not found',
      success: false,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
