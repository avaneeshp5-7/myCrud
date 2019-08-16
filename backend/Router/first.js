const express=require('express');
const route=express.Router();
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart({
    uploadDir: './src/assets/uploads',

});
const bodyp=require('body-parser')
const cors=require('cors')
// route.use(bodyp.json())
route.use(bodyp.urlencoded({extended:true}))
const cntrl=require('../Cntrl/controller.js')
 route.use(cors())
route.get('/gallery_url',cntrl.getGallery);
route.post('/single_image_url',cntrl.getSingle);
route.post('/member_image',multipartMiddleware,cntrl.memberImage);
route.post('/add_members_nuss',cntrl.addMembers);

module.exports=route;
