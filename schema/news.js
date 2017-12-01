/**
 * Created by ranchengwei on 2017/11/21.
 */
const mongoose=require('mongoose')
const news=new mongoose.Schema({
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
});

/**分页查询
 * @param title 文章标题 {String}
 * @param page_size 分页大小{Number}
 * @param count 跳过的文档数量{Number}
 * */
news.statics.find_by_page=async function(title,page_size,count) {
    let result;
    await this.find().limit(page_size).skip(count).sort({'create_time':-1}).then(res=>{
        result=res;
    }).catch(err=>{
        result=err;
    });
    return result;
}
/**查询所有的总共条数
 * */
news.statics.find_all_count=async function () {
    let count;
    await this.count().then(res=>{
        count=res;
    }).catch(err=>{
        count=err;
    });
    return count;
}

module.exports=news;