const mongoose = require('mongoose')

const magazineSchema = new mongoose.Schema({
    magazineName:{
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

module.exports = mongoose.model('Magazine',magazineSchema);