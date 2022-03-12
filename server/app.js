const { join } = require('path');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const router = require('./routes/router');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(morgan('short'));
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
