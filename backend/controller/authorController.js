const Author = require('../model/Author');

const createAuthor = async(req,res)=>{
    try{
        const {name,imageurl,bookArray,magazineArray} = req.body;
        const author = await Author.create({name,imageurl,bookArray,magazineArray});
        res.status(201).json({msg:'Author successfully created!'});
    }catch(err){
        console.log(err);
        res.status(404).json({msg:'something went wrong!'});
    }
}

const getSingleAuthor= async(req,res)=>{
    try{
        const {name} = req.body;
        const author = await Author.findOne({name});
        if(!author) req.status(404).json({msg:'Author not found!'});
        res.status(200).json({msg:'Author found!'})
    }catch(err){
        console.log(err);
        res.status(404).json({msg:'something went wrong!'});
    }
}


const getAllAuthors = async(req,res)=>{
    try{
        const author = await Author.find({});
        res.status(200).json(author);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Server error'});
    }
}

module.exports = {createAuthor,getSingleAuthor,getAllAuthors};