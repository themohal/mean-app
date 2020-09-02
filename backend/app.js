// Express JS Server

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World From Express!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


// const express = require('express')
// const app = express()
//       app.use((req,res,next)=>{ //request,response, next middleware service
//         console.log("first middle ware");

//         next(); //to excute other middleware services in a sequence
//       });

//       app.use((req,res,next)=>{
//         res.send("i am from express .... this is auto")
//       })

//to resolve cors error we use middleware

const express = require('express');
const app = express();
const Post = require('./models/post');
const mongoose =  require('mongoose');
const serverless = require('serverless-http');
const path = require('path');


const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/dist'));
let controller = require('./controller');

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

app.use('/.netlify/functions/api',controller);


module.exports = serverless(app); //to import it in server.js where node server is running
