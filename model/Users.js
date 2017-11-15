/**
 * Created by ranchengwei on 2017/11/13 0013.
 */
const mongoose=require('mongoose')
const userSchema=require('../schema/users')

module.exports=mongoose.model('Users',userSchema)