// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var Schema = mongoose.Schema;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("We are connected...!");
// });

let postSchema= new Schema({
  title:  {type:String,required:true}, // String is shorthand for {type: String}
  content: {type:String,required:true},
});

module.exports = mongoose.model('Post',postSchema);
