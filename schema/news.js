/**
 * Created by ranchengwei on 2017/11/21.
 */
const mongoose=require('mongoose')

module.exports=new mongoose.Schema({
    title: {//标题
        type:String
    },
    auth: {//作者
        type:String
    },
    content:{//内容
        type:String
    },
    abstract:{//摘要
        type:String
    },
    sort: {//排序号
        type:Number
    },
    create_time:{//创建日期
        type:Date,
        default: Date.now
    }
})