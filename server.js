var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: config.sessionSecret}));

var corsOptions = {
    origin: 'http://localhost:2700'
}

app.use(cors(corsOptions));

app.post('/api/login', userCtrl.login)

app.get('/api/profiles', profileCtrl.getFriends)

app.listen(2700)