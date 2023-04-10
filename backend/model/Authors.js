const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageurl:{
        type:String
    }
})

module.exports = mongoose.model('authorSchema',authorSchema);