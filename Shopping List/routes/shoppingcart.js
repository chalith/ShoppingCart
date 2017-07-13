var express = require('express');
var path = require('path');
var Item = require('../db/Item');
var app = express();
var engines = require('consolidate');
var bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.urlencoded());
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static('assets'));
app.use(express.static('views'));

router.get('',function(req,res){
    Item.getAllItems(function(err,items){
        console.log(items);
        res.render('index',{data: items});
    });
});

router.get('/cart',function(req,res){
    Item.getAllItems(function(err,items){
        res.render('cart',{data: items});
    });
})

router.post('/searchcart',function(req,res){
    var data = req.body;
    var item = data['input'];
    Item.searchItem(item,function(err,items){
        res.send(items);
    });
});

module.exports = router;