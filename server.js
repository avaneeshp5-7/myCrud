const exp=require('express');
const cors=require('cors');
var path=require('path');
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
app.use('/',route)
app.use(cors())
app.use(exp.static(__dirname + '/dist/routing'));
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/dist/routing/index.html'));
})
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
app.listen(port),
app.use(exp.static(__dirname));
console.log("On 3000")