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
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers'
  ,'Origin, X-Requested-With, Accept, Content-Type, Authorization');
    res.setHeader('Connection', 'keep-alive');

  res.setHeader('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT,OPTIONS');

  next();
});


app.post('/api/posts/',(req,res,next)=>{
  const post = req.body;
  console.log(req.body);
  res.status(201).json({
    message:"Post added successfully"
  });
});


      app.use('/api/posts/',(req,res,next)=>{  //you will need to visit localhost:3000/api/posts to see results
        const post = [{
          id:'3sdadadasd',
          title:'First server side post',
          content:'Hello Farjad Congratulation content from server',
        },
      ];
      res.status(200).json({post:post});

      });


module.exports = app //to import it in server.js where node server is running
