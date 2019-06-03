var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var morgan = require('morgan');
var fileupload = require('express-fileupload');
// bodymen uses schemas of mongoose
const { errorHandler } = require('bodymen');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(fileupload());
app.use(express.static(path.join(__dirname, 'public')));

// Set CORS for RESTFUL-API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    // Can be specific 
    // res.header('Access-Control-Allow-Origin', 'http:blabla')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET ');
        return res.status(200).json({});
    }
    next()
})

// Routes
app.use(require('./routes/main.js'));

app.use(errorHandler())

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    console.log(req.app)
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.json({
        status: res.locals.error.status,
        message: res.locals.error.message
    });
});

/**
 * In package.json
 * Use DEBUG=proyecto-santander:* is for prints logs of proyecto-santader using debug('info')
 */


module.exports = app;
