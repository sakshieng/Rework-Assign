const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    isbn:{
        type:Number,
        required:true
    },
    imageurl:{
        type:String
    }
});

module.exports = mongoose.model('Book',bookSchema);