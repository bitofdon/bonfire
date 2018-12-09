var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');

// routers
let indexRouter = require('./pages/routes/index');
let menuRouter = require('./pages/routes/menu');
let aboutUsRouter = require('./pages/routes/about_us');
let blogRouter= require('./pages/routes/blog');
let locationsRouter = require('./pages/routes/locations');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/pages/views/layouts'}));
app.set('views', path.join(__dirname, './pages/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static('public'));

// hooking specific pages with routers middleware
app.use('/', indexRouter);
app.use('/menu', menuRouter);
app.use('/about_us', aboutUsRouter);
app.use('/locations', locationsRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
