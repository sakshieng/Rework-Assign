const mongoose = require('mongoose');

mongoose.set("strictQuery",false);
const connectDB = (url) => {
   console.log('Connecting to database')
   return mongoose.connect(url);

} 

module.exports = connectDB;
