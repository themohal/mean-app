const mongoose =  require('mongoose');
const express = require('express');
const app = express();
const Post = require('../backend/models/post');
const path = require('path');


const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/dist'));
let controller = require('../backend/controller');

exports.handler = async (event, context, callback)=> {

let dbName = "mean-app";
let password = "zbryPOKORHLa5C4J";
mongoose.connect("mongodb+srv://phoenix:"+password+"@phoenix-cluster.24xxp.mongodb.net/"+dbName+"?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true ,useFindAndModify:false})
.then(()=>{
console.log("Connected to database");

}).catch(()=>{
  console.log("Connection Failed");
}).finally(()=>{
//mongoose.disconnect();
});

app.use('/api',controller);


module.exports = app; //to import it in server.js where node server is running
callback(null,{
  statusCode: 200,
  body: console.log("Connected to database")
});
}
