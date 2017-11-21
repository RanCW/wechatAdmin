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
    let returnObj;
    await Users.findOne(creatObj, (err, res) => {
        if (err) {
            returnObj = {
                state: 2,
                message: err
            }
        } else {
            if (res) {
                returnObj = {
                    state: 1,
                    message: '登录成功',
                    user_name: res.user_name,
                    user_id: res.id
                }
            } else {
                returnObj = {
                    state: 0,
                    message: '用户名或密码错误'
                }
            }
        }
        ctx.body = returnObj;
    });
}
