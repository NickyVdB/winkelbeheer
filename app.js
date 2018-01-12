var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');

var appRoutes = require('./routes/app');
var werknemerRoutes = require('./routes/werknemer');
var leverancierRoutes = require('./routes/leverancier');
var klantRoutes = require('./routes/klant');
var afdelingRoutes = require('./routes/afdeling');
var promotieRoutes = require('./routes/promotie');
var productRoutes = require('./routes/product');
var factuurItemsRoutes = require('./routes/factuuritem');
var factuurRoutes = require('./routes/factuur');
var orderRoutes = require('./routes/order');

var app = express();
mongoose.connect('localhost:27017/node-angular');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/werknemers', werknemerRoutes);
app.use('/leveranciers', leverancierRoutes);
app.use('/klanten', klantRoutes);
app.use('/afdelingen', afdelingRoutes);
app.use('/promoties', promotieRoutes);
app.use('/producten', productRoutes);
app.use('/factuuritems', factuurItemsRoutes);
app.use('/facturen', factuurRoutes);
app.use('/orders', orderRoutes);
app.use('/', appRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
