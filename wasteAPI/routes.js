
var express=require("express")
var router=express.Router();
var db=require("./models")
var helpers=require("./helpers/dbendpoints")

router.get('/data',helpers.indata)

module.exports = router;
