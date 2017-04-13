var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js')
var userCtrl = require('./controllers/userCtrl.js')

var port = 8080;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: config.sessionSecret
}))

var corsOptions = {
	origin: 'http://localhost:8080'
};


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles)




app.listen(port, function () {
  console.log('listening');
});
