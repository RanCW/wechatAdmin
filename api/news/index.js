/**
 * Created by ranchengwei on 2017/11/21.
 * this is about news controller
 */
const newsModel=require('../../model/News')

//新闻新增
exports.add_news=async (ctx,next)=>{
    let add_obj=ctx.request.body;
    let return_obj;
    await newsModel.create(add_obj,(err,news)=>{
        if(err){
            return_obj={
                state:2,
                message:err.toString()
            }
        }else{
            return_obj={
                state:1,
                message:'新增成功'
            }
        }
    })
    ctx.body=return_obj;
}