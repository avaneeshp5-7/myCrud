const exp=require('express');
const cors=require('cors');
dbconect=require('./backend/config/configuration/config.js')
const bp=require('body-parser')
const multipart = require('connect-multiparty')
const route=require('./backend/Router/first.js')
const port=process.env.PORT || 3000
const app=exp();
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
var image;
const multipartMiddleware = multipart({
    uploadDir: './src/assets/uploads',

});

app.use(cors())

app.post('/post_file_url', multipartMiddleware, (req, res) => {
    image=req.files.uploads[0].path;
   
    var rest = image.slice(19)
   dbconect.images.save({image:rest},(err,result)=>{
   if(err){
       res.json({
           message:"Somthing went wrong",
       })
   }else{
       res.json({
           message:'Uploaded and saved !'
       })
   }
   })
});

app.use('/',route)
app.listen(port,()=>{
    console.log("On 3000")
});