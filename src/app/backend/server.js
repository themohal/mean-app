
const urlencoded =require('body-parser');
const MongoClient = require('mongodb').MongoClient
var compression = require('compression')
var express = require('express')
var app = express()
var router = express.Router();
app.use(compression())


let data;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());



const uri = "mongodb+srv://first-db:bewafa143@cluster0.b37dn.mongodb.net/first?retryWrites=true&w=majority";

                  router.get('/name', (req, res) => {
                    MongoClient.connect(uri, function(err, db) {
                        if (err) throw err;
                        var dbo = db.db("first");
                        dbo.collection("name").findOne({
                            name: req.params.name
                        },
                        function(err, result) {
                            if (err) throw err;
                            res.json(result);
                            db.close();
                        });
                    });
                  });


// var server = app.listen(3000, function() {});
module.exports = router


