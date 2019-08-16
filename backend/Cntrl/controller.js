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
            message:"Success ! ",
            data:result
           })
        }
    })
}
var image;
var rest;
exports.memberImage=(req,res)=>{
    image=req.files.uploads[0].path;
    rest = image.slice(19)
}

exports.addMembers=(req,res)=>{
    connect.Our_members.find({Email:req.body.Email},(errs,ress)=>{
        if(ress.length==1){
            res.send({
                success:false,
                message:"User Duplicate"
            })
        }
        else{
            connect.Our_members.find({}, { _id: 1 }).sort({ _id: -1 }).limit(1, function (e, r) {
             if (r == 0) {
                 var val = 0
             }
             else {
                 val = r[0]._id
             }
             val++
             connect.Our_members.save({
                  _id: val, 
                  first_name: req.body.first_name, 
                  last_name:req.body.last_name,
                  memebership:req.body.memebership ,
                  Email:req.body.Email,
                  Password:req.body.Password,
                  contact:req.body.contact,
                  profile:rest
                 }, (er,ress)=> {
                 if(er){
                     res.send({
                         success:false,
                         message:"Somthing went wrong",
                         result:ress
                     })
                 }
                 else{
                     res.send({
                         success:true,
                         message:"User Register !"
                     }) 
                 }
             })
         })
        }
    })
};