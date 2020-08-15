const express = require("express");
const router = express.Router();
const Post = require('./models/post');
const mongoose =  require('mongoose');

const bodyparser = require('body-parser');

router.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers'
  ,'Origin, X-Requested-With, Accept, Content-Type, Authorization');
    res.setHeader('Connection', 'keep-alive');

  res.setHeader('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT,OPTIONS');

  next();
});


router.post('/posts',async (req,res)=>{
 try{
  const post = new Post({
    title:req.body.title,          //these lines adding data and creating schema
    content:req.body.content,
  }); //req.body;
  console.log(post);
  await post.save(); // save the data in database
  res.status(201).json({
    message:"Post added successfully"
  });
 }catch{(err)=>{console.log(err)}}

});


      router.get('/posts',async (req,res)=>{  //you will need to visit localhost:3000/api/posts to see results
        try{
        await Post.find(function(err, data)
        {
          console.log(data);
          const post =data;
        res.status(200).json({post:post})
        });
      }catch{(err)=>{console.log(err)}}

      });
      router.delete("/posts/:id",async (req, res)=> {
        let id  =req.params.id;
        try{
       await Post.findByIdAndDelete(id,(err,data)=>{
        console.log(data);
        res.status(200).json({message:'Successfully Deleted'})
        })}
      catch{(err)=>{console.log(err)}
        }

        });

        router.get('/posts/:id',async (req,res)=>{  //you will need to visit localhost:3000/api/posts to see results
          let id  =req.params.id;
          console.log(id);
          try{
          await Post.findById(id,function(err, data)
          {
            res.status(200).json(data);
          });
        }catch{(err)=>{console.log(err)}}

        });

        router.put("/posts/:id",async (req,res)=>{
          let id  =req.params.id;
          console.log(id);
          try{
            const post = {
              title:req.body.title,          //these lines adding data and creating schema
              content:req.body.content,
            };//req.body;
            console.log(post);
            await Post.findByIdAndUpdate(id,{$set:post},{new:true} ,(err,data)=>{
            res.status(200).json({post:data});
           });
          }
           catch{(err)=>{console.log(err)}}
        });
module.exports = router;
