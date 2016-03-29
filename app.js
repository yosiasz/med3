'use strict';

var express = require('express');
var app = express();

var saleRouter = require('./src/routes/saleRoutes');

var port = process.env.PORT || 5000;


//used by express first
app.use(express.static('./public'));
app.use(express.static('./src'))

//for basic html
//app.use(express.static('src/views'));

//templating engine
app.set('views', './src/views');      
app.set('view engine', 'ejs');


app.use('/sales', saleRouter.getSales());

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render'
    });
});

app.listen(port, function () {
    console.log('running server on port ' + port);
});