var db=require("../models")

exports.indata = function (req,res){
    var data={
        author: "def",
        body:  "abc"
        
    }
    db.contacts.create(data)
    .then((d1)=>{
        res.json(d1)
    })
    .catch((err)=>{
        res.send(err)
    })
}


module.exports=exports;