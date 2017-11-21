/**
 * Created by ranchengwei on 2017/11/21.
 */
const mongoose=require('mongoose')
const newsSchema=require('../schema/news')
module.exports=mongoose.model('News',newsSchema)