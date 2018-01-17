const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');
const fs = require('fs');
const moment = require('moment');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://timesheetuser:timesheetuser@ds115124.mlab.com:15124/timesheet_mlab');
// mongoose.connection
// 	.once('open', () => console.log('mongoose is good to go!'))
// 	.on('error', (error) => console.warn(error));

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

app.use((req, res, next) => {
	let now = moment().format('YYYY-MM-DD HH:mm:ss:SSS Z X');
	let log = `${now} ${req.connection.remoteFamily} ${req.connection.localAddress}:${req.connection.localPort} ${req.method} ${req.url}`;
	fs.appendFile('server.log', log + '\n', (err) => {
		if(err) console.log('Unable to append to server.log');
	});
	next();
});

// for maintenance page
// app.use((req, res, next) => {
// 	res.render('maintenance.hbs');
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth");
  next();
});

// app.use(express.static(path.join(__dirname, 'views/setup/assets')));

app.get('/', (req, res) => {
	res.render('index.hbs');
});

// app.get('*', (req, res) => {
//   res.render(path.join(__dirname, 'public/index.html'));
// });

// app.use((err, req, res, next) => {
// 	res.status(422).send({ error: err.message });
// });

module.exports = app;