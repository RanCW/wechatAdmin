/**
 * Created by ranchengwei on 2017/11/9.
 * this is about users info controller
 */
//用户注册
exports.user_register=async (ctx,next)=>{
    ctx.body={
        data:{
            user_name:'小花',
            id:"000001"
        },
        message:'恭喜您，注册成功',
        code:1
    }
}
//用户登录
exports.user_login=async (ctx,next)=>{
    ctx.body={
        data:{
            user_name:'小花',
            id:"000001"
        },
        code:1,
        message:'恭喜您，登录成功'
    }
}
