var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World 2!' + process.env.BLA + process.env.COMMA);
});

app.listen(process.env.PORT || 3000, function() {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
});
