const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const user = require('./routes/user');
app.use('/user', user);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        console.log('error url: ' + req.protocol + '://' + req.get('host') + req.originalUrl);
        console.log('error: ' + err.message + '\n' + err);
        res.status(err.status || 500).send(err.message + '\n' + err);
    });
}

// Production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    console.log('error: ' + err.message);
    res.status(err.status || 500).send(err.message);
});

module.exports = app;
