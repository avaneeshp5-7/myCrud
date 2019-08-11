const mongos=require('mongojs');
const connect=mongos("mongodb://nuss_patahana:patahana1234@ds113482.mlab.com:13482/nuss")
module.exports=connect;
