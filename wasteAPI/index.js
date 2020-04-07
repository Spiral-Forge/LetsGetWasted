var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'contacts';
var db = '';
var collection = '';

function connect() {
  MongoClient.connect(url, {
    useNewUrlParser: true
  }, (err, client) => {
    if (err) throw err;
    console.log("Connected successfully to server");
    db = client.db(dbName);
    //collection=db.collection('trial');
  });
}



app.use(bodyParser.json())
app.use('/', express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.send("hello world");
})

// app.use('/api',changeendpoints)

app.listen(8080, () => {
  console.log("server running on 8080");
  connect();
})

app.get('/register', (req, res) => {
  res.redirect('/register.html');
})

app.get('/funfacts', (req, res) => {
  res.redirect('/funfacts.html');
})


app.get('/dispose', (req, res) => {
  res.redirect('/dispose.html');
})

app.get('/don', (req, res) => {
  res.redirect('/donater.html');
})

app.get('/contact', (req, res) => {
  res.redirect('/contact.html');
})

app.post('/getgc', (req, res) => {
  //var data="Paper_Waste";
  console.log(typeof(req.body))
  // res.sendStatus(200)
  getd(req.body.type, function(d) {
    console.log(d);
    res.json(d)
  })
})

app.post('/registergc', (req, res) => {
  //console.log(req.body)
  var wastetype = req.body.type
  //console.log(wastetype)
  let {
    type,
    ...form
  } = req.body;
  //console.log(form)
  putdata(wastetype, form, (d) => {
    //console.log(d);
    res.sendStatus(200);
  })
})

app.get('/getss', (req, res) => {
  puts((d) => {
    console.log(d[0])
    res.json(d)

  })
})

app.post('/dentry', (req, res) => {
  //console.log(req.body)
  // var {item,qty,contact,desc}=req.body
  //console.log(wastetype)
  // console.log(req.body)
  donateEntry(req.body, (result) => {
    res.json(result[0]);
  })
})

app.post('/dupdate', (req, res) => {
  var {
    id
  } = req.body;
  update(id, req.body, (d) => {
    res.sendStatus(200);
  })
})

app.post('/dget', (req, res) => {
  //console.log(req.body)
  var {
    id
  } = req.body
  //console.log(wastetype)
  // console.log(req.body)
  getDonateEntry(id, (result) => {
    res.json(result[0])
  })
})

function update(id, body, cb) {
  var collection = db.collection("Donate");
  collection.update({
    id: id
  }, body, function(err, result) {
    if (err) throw err;
    cb(result)
  })
}

function puts(cb) {
  var collection = db.collection("Donate");
  collection.find().toArray(function(err, result) {
    if (err) throw err;
    // console.log(result);
    cb(result)
  });
}

function getd(data, cb) {
  let collection = db.collection(data);
  collection.find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    cb(result)
  });
}

function getDonateEntry(id, cb) {
  let collection = db.collection("Donate");
  collection.find({
    id: id
  }).toArray(function(err, result) {
    if (err) throw err;
    // console.log(result);
    cb(result)
  });
}

function donateEntry(body, cb) {
  let collection = db.collection("Donate");
  collection.insertOne(body, (err, result) => {
    if (err) throw err;
    cb(result)
  })
}

function putdata(w, f, cb) {
  let collection = db.collection(w);
  collection.insertOne(f, (err, result) => {
    if (err) throw err;
    cb(result)
  })
}