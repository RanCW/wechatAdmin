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
    let keywords = ctx.request.body.keywords;
    if (keywords) {
        let findObj = {
            title: keywords
        }
    }
    let data;
    data=await newsModel.find_by_page('',10,10);
    let total=await newsModel.find_all_count();
    ctx.body = {
        message:'查询成功',
        state:1,
        total:total,
        data:data
    };
}