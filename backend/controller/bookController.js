const Book = require('../model/Book')

const createBook = async(req,res)=>{
    try{
        const {bookName,author,price,isbn} = req.body;
        const book = await Book.create({bookName,author,price,isbn});
        res.status(201).json({msg:'book successfully created!'});
    }catch(err){
        console.log(err);
        res.status(404).json({msg:'something went wrong!'});
    }
}

const getSingleBook = async(req,res)=>{
    try{
        const {bookName,isbn} = req.body;
        const book = await Book.findOne({isbn,bookName});
        if(!book) req.status(404).json({msg:'book not found!'});
        res.status(200).json({msg:'book found!'})
    }catch(err){
        console.log(err);
        res.status(404).json({msg:'something went wrong!'});
    }
}

const updateBook = async(req,res) =>{
    try{
        const{isbn,bookName,price}=req.body;
        const book = await Book.findByIdAndUpdate({isbn}); 
        if(!book) res.status(404).json({msg:'Book not found!'});
        book.price = newPrice;
        book.save();
        res.status(200).json(book);
    }catch(err){
        console.log(err);
        res.status(404).json({msg:'something went wrong!'});
    }
}

const getAllBooks = async(req,res)=>{
    try{
        const book = await Book.find({});
        res.status(200).json(book);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Bad request'});
    }
}


const deleteBook = async(req,res)=>{
    try{
        const {bookName} = req.body;
        const book = await Book.findOneAndDelete({bookName});
        res.status(200).json({msg:'Book is deleted!'});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Bad request'});
    }
}

module.exports = {createBook,getSingleBook,getAllBooks,updateBook,deleteBook};