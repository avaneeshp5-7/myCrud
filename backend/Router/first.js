const express=require('express');
const route=express.Router();

const bodyp=require('body-parser')
const cors=require('cors')
// route.use(bodyp.json())
route.use(bodyp.urlencoded({extended:true}))
const cntrl=require('../Cntrl/controller.js')
 route.use(cors())
route.get('/gallery_url',cntrl.getGallery);
route.post('/single_image_url',cntrl.getSingle);

module.exports=route;
