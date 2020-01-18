var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var mySchema = new Schema({
    author: String,
    body:   String
  });
  
var contacts = mongoose.model('contacts', mySchema);
module.exports=contacts;