var express = require('express');
var _ = require('lodash');
var Q = require('q');
var body_parser = require('body-parser');
var cookie_parser = require('cookie-parser');
var multer = require('multer');

var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!!');
})

var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`應用實例，訪問地址${host}:${port}`);
});

