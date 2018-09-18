var exp=require("express")
var rout=exp.Router()
var mg=require("mongojs")
var conn=mg("mongodb://localhost:27017/MyCrud")
rout.post("/insdata",function(req,res){
    bddata=req.body
  conn.App.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result){
      if(result==0)
      {
          var val=0
      }
      else
      {
          val =result[0]._id
      }
      val++
      conn.App.save({_id:val,username:bddata.username,password:bddata.password},function(){
          res.send("Inserted !! ")
      })
  })
    
    
})
rout.get("/getRec",function(req,res){
    conn.App.find(function(err,result){
        res.send(result)
    })
})
rout.post("/updat",function(req,res){
   var  udata=req.body

    conn.App.update(udata[0],{$set:udata[1]} ,function(){
        res.send("Updated !")
    })
})
rout.post("/deldatas",function(req,res){
    var ddata=req.body
    
    conn.App.remove(ddata,function(){
        res.send("Deleted")
    })
})
module.exports=rout;