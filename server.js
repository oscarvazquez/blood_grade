var express = require('express');

var path = require('path');

var app = express();


var bodyParser = require('body-parser');

var moment = require('moment');


app.use(express.static(path.join(__dirname, './client')));
app.use('/node_modules',express.static(__dirname + '/node_modules'))
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});
