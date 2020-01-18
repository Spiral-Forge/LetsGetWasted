var mongoose=require("mongoose")
mongoose.set('debug',true)
mongoose.connect('mongodb://localhost/myproject')
mongoose.Promise=Promise;
module.exports.contacts=require("./schema")