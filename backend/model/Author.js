const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageurl:{
        type:String
    },
    bookArray:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true
    },
    magazineArray:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true
    }
})

module.exports = mongoose.model('Author',authorSchema);