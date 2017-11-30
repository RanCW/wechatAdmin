/**
 * Created by ranchengwei on 2017/11/21.
 * this is about news controller
 */
// let mongoose=require('mongoose')
// mongoose.connect('localhost','27017',function (error) {
//     if (error){
//         console.log('连接数据库失败2')
//     }else{
//         console.log('连接数据库成功2');
//     }
// });
const newsModel = require('../../model/News')

/**新闻新增
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
exports.add_news = async (ctx, next) => {
    let add_obj = ctx.request.body;
    let return_obj;
    await newsModel.create(add_obj).then((res) =>{
        console.log('新增成功')
        return_obj = {
            state: 1,
            message: '新增成功'
        }
        ctx.body = return_obj;
    }).catch(err => {
        console.log('新增失败')
        return_obj = {
            state: 1,
            message: err.toString()
        }
        // ctx.body = return_obj;
    })
    return_obj = {
        state: 1,
        message: '新增成功'
    }
    ctx.body = return_obj;
}

/**
 * 查询新闻列表
 * * */
exports.get_news_list = async (ctx, next) => {
    console.log('进来了查询')
    let keywords = ctx.request.body.keywords;
    if (keywords) {
        let findObj = {
            title: keywords
        }
    }
    cosnole.log('走了这里啊1')
    let resultObj;
    await newsModel.find({}, (err, docs) => {
        console.log('查询的结果')
        if (err) {
            resultObj = {
                state: 0,
                message: err
            }
        } else {
            resultObj = {
                state: 1,
                data: docs
            }
        }
    })
    cosnole.log('走了这里啊')
    ctx.body = resultObj;
}