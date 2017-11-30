/**
 * Created by ranchengwei on 2017/11/9.
 * this is about users info controller
 */
const Users = require('../../model/Users')
//用户注册
exports.user_register = async (ctx, next) => {
    let obj = ctx.request.body;
    let user_name = obj.user_name;
    let pass_word = obj.password;
    let creatObj = {
        user_name: user_name,
        pass_word: pass_word
    }
    let returnObj;
    await Users.create(creatObj, (err) => {
        console.log('创建一个成功');
        if (err) {
            returnObj = {
                state: 2,
                message: err.toString()
            };
        } else {
            returnObj = {
                state: 1,
                message: '注册成功'
            }
        }
    });
    ctx.body = returnObj
}
//用户登录
exports.user_login = async (ctx, next) => {
    let obj = ctx.request.body;
    let user_name = obj.user_name;
    let pass_word = obj.password;
    let creatObj = {
        user_name: user_name,
        pass_word: pass_word
    }
    let returnObj;//返回结果
    let find_result=await Users.find_by_options(creatObj);
    if(!find_result){
        returnObj = {
            state: 2,
            data:find_result,
            message: '用户或密码错误'
        };
        ctx.body = returnObj;
    }else{
        returnObj = {
            state: 1,
            message: '登录成功',
            data:{
                user_name:find_result.user_name,
                id:find_result.id
            }
        }
        ctx.cookies.set('user_name', find_result.user_name);
        ctx.cookies.set('user_id', find_result.id);
        ctx.body = returnObj;
    }
}

//校验用户登录
exports.checkUserLogin = async function(ctx, next){
    let user_id = ctx.cookies.get('user_id');
    let returnObj;
    let result=await Users.find_by_id(user_id);//通过用户id查找数据库
   if (result&&user_id){
       await next();
   }else{
       returnObj = {
           state: 2,
           message: '用户未登录'
       };
       ctx.body = returnObj;
       return;
   }
}
