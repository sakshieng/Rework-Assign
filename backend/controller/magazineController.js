const Magazine = require('../model/Magazines');

const createMagazine = async(req,res)=>{
    try{
        const {magazineName,author,price,isbn} = req.body;
        const magazine = await Magazine.create({magazineName,author,price,isbn});
        res.status(201).json({msg:'Magazine successfully created!'});
    }catch(err){
        console.log(err);
        res.status(404).json({msg:'something went wrong!'});
    }
}

const getSingleMagazine= async(req,res)=>{
    try{
        const {magazineName,isbn} = req.body;
        const magazine = await Magazine.findOne({isbn,magazineName});
        if(!magazine) req.status(404).json({msg:'Magazine not found!'});
        res.status(200).json({msg:'Magazine found!'})
    }catch(err){
        console.log(err);
        res.status(404).json({msg:'something went wrong!'});
    }
}

const updateMagazine = async(req,res) =>{
    try{
        const{isbn,magazineName,price}=req.body;
        const magazine = await Magazine.findByIdAndUpdate({isbn}); 
        if(!magazine) res.status(404).json({msg:'Magazine not found!'});
        magazine.price = newPrice;
        magazine.save();
        res.status(200).json(magazine);
    }catch(err){
        console.log(err);
        res.status(404).json({msg:'something went wrong!'});
    }
}

const getAllMagazines = async(req,res)=>{
    try{
        const magazine = await Magazine.find({});
        res.status(200).json(magazine);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Server error'});
    }
}


const deleteMagazine = async(req,res)=>{
    try{
        const {magazineName} = req.body;
        const book = await Magazine.findOneAndDelete({magazineName});
        res.status(200).json({msg:'Magazine is deleted!'});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:'Server error'});
    }
}

module.exports = {createMagazine,getSingleMagazine,getAllMagazines,updateMagazine,deleteMagazine};