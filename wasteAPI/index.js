var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var changeendpoints=require("./routes")


// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017";
// const dbName = 'myproject';
// const assert = require('assert');
// var db='';
// var collection='';
// function connect(){
//     MongoClient.connect(url,{useNewUrlParser:true},(err,client) => {
//         if (err) throw err;
//         console.log("Connected successfully to server");
//         db = client.db(dbName);
//         collection=db.collection('info');
//     });
// }



app.use(bodyParser.json())
app.use('/',express.static('public'))
app.use(bodyParser.urlencoded())

app.get('/',function(req,res){
    res.send("hello world");
})

app.use('/api',changeendpoints)

app.listen(8080,()=>{
    console.log("server running on 5000");
    //connect();
})

app.get('/register',(req,res)=>{
    res.redirect('/register.html');
})

app.get('/nearme',(req,res)=>{
    res.redirect('/nearme.html');
})

app.get('/register',(req,res)=>{
    res.redirect('/register.html');
})

app.get('/dispose',(req,res)=>{
    res.redirect('/dispose.html');
})

app.get('/contact',(req,res)=>{
    res.redirect('/contact.html');
})

// app.get('/data',(req,res)=>{
//     var data=[{a:1},{b:2}];
//     insert(data,function(d){
//         console.log(d);
//         res.sendStatus(200);
//     })
// })

// function insert(data,cb){
//     let collection=db.collection('info');
//     collection.insertMany(data,function(err, result) {
//         if(err) throw err;
//         console.log("Inserted 2 documents into the collection");
//         cb(result);
//       })
// }

