var express = require('express');
var redis=require('redis');

var app = express();
var client=redis.createClient({"host":'redis-server',"port":6379});

client.set('visits',0);

app.get('/', (req, res,next)=>{
   client.get('visits',(err,visits)=>{
	res.send("Visits: "+visits);
	client.set(parseInt(visits)+1);
   });
  //next();
});

app.listen(8081);
