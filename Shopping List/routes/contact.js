var express =require('express');
var app = express();
var router = express.Router();

app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static('assets'));
app.use(express.static('views'));

router.get('',function(req,res){
    res.render('contact');
});

module.exports = router;