const mongoose =  require('mongoose');

exports.handler = function(event, context, callback) {
  let dbName = "mean-app";
let password = "zbryPOKORHLa5C4J";
mongoose.connect("mongodb+srv://phoenix:"+password+"@phoenix-cluster.24xxp.mongodb.net/"+dbName+"?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true ,useFindAndModify:false})
.then(()=>{
console.log("Connected to database");

}).catch(()=>{
  console.log("Connection Failed");
}).finally(()=>{
mongoose.disconnect();
});
}
