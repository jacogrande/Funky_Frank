var express = require("express");
var path = require("path");
var app = express();

var hostname="localhost";
var port=1234;

app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.listen(port,hostname,function(){
	console.log("sock it to me...");
});