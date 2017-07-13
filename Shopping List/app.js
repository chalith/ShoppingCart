var express = require('express');
var path = require('path');
var Item = require('./db/Item');
var db = require('./db/db');
var app = express();
var mongoose = require('mongoose');
var engines = require('consolidate');
var bodyParser = require('body-parser');
var shoppingCart = require('./routes/shoppingcart');
var contact = require('./routes/contact');
var connect = mongoose.connect(db.database);

if(connect){
    console.log('database connected');
}else{
    console.log('database not connected');
}

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static('assets'));
app.use(express.static('views'));

var shoppingCart = require('./routes/shoppingcart');
var contact = require('./routes/contact');
var checkout = require('./routes/checkout');

app.use('/shoppingcart',shoppingCart);
app.use('/contact',contact);
app.use('/checkout',checkout);

app.listen(port,function(){
    console.log("listening to port "+port);
});

app.get('/',function(req,res){
    res.send('Welcome to shopping cart');
});

app.get('/checkout',function(req,res){
    res.render('checkout');
});