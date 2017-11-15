/**
 * Created by ranchengwei on 2017/11/13 0013.
 */
 const mongoose=require('mongoose')

 //用户相关信息
module.exports=new mongoose.Schema({
   user_name:{type:String},
   pass_word:{type:String}
 })