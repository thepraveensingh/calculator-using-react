const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/pracApp');

const userSchema = new mongoose.Schema({
  name : String,
  number : Number
})
const MongoModel = mongoose.model('User',userSchema);
module.exports = MongoModel