const connect = require('../config/configuration/config.js');


exports.upload=(req,res)=>{
    console.log(storage.fieldname)
}
exports.getGallery=(req,res)=>{
    connect.images.find((err,result)=>{
        if(err){
            res.send({
                message:"Fail !"
            })
        }
        else{
           res.send({
            message:"Success !",
            data:result
           })
        }
    })
}

exports.getSingle=(req,res)=>{
    connect.images.find({image:req.body.image},(err,result)=>{
        if(err){
            res.send({
                message:"Fail !"
            })
        }
        else{
           res.send({
            message:"Success !",
            data:result
           })
        }
    })
}