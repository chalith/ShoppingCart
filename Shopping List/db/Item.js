var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    price: String,
    description: String,
    image: String
})

module.exports = mongoose.model('Item',itemSchema);

module.exports.saveItem = function(item,callback){
    item.save(callback);
}

module.exports.getAllItems = function(callback){
    var Item = mongoose.model('Item',itemSchema);
    Item.find(callback);
}

module.exports.searchItem = function(item,callback){
    var Item = mongoose.model('Item',itemSchema);
    Item.find({name: new RegExp("^" + item.toLowerCase(), "i")},callback);
}