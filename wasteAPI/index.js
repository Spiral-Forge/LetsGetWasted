var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var changeendpoints=require("./routes")


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'contacts';
const assert = require('assert');
var db='';
var collection='';
function connect(){
    MongoClient.connect(url,{useNewUrlParser:true},(err,client) => {
        if (err) throw err;
        console.log("Connected successfully to server");
        db = client.db(dbName);
        //collection=db.collection('trial');
    });
}



app.use(bodyParser.json())
app.use('/',express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.send("hello world");
})

// app.use('/api',changeendpoints)

app.listen(8080,()=>{
    console.log("server running on 8080");
    connect();
})

app.get('/register',(req,res)=>{
    res.redirect('/register.html');
})

app.get('/funfacts',(req,res)=>{
    res.redirect('/funfacts.html');
})


app.get('/dispose',(req,res)=>{
    res.redirect('/dispose.html');
})

app.get('/don',(req,res)=>{
    res.redirect('/donate.html');
})

app.get('/contact',(req,res)=>{
    res.redirect('/contact.html');
})

app.post('/getgc',(req,res)=>{
    //var data="Paper_Waste";
    console.log(req.body)
    getd(req.body.type,function(d){
        //console.log(d);
        res.json(d)
    })
})

app.post('/registergc',(req,res)=>{
    //console.log(req.body)
    var wastetype=req.body.type
    //console.log(wastetype)
    let {type, ...form} = req.body;
    //console.log(form)
    putdata(wastetype,form,(d)=>{
        //console.log(d);
        res.sendStatus(200);
    })
})

function getd(data,cb){
    let collection=db.collection(data);
    collection.find().toArray(function(err, result) {
        if (err) throw err;
        //console.log(result);
        cb(result)
  });
}

function putdata(w,f,cb){
    let collection=db.collection(w);
    collection.insertOne(f,(err,result)=>{
        if (err) throw err;
        cb(result)
    })
}



