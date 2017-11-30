/**
 * Created by ranchengwei on 2017/11/13 0013.
 */
const mongoose = require('mongoose')
//初始化一个Schema
const userSchema = new mongoose.Schema({
    user_name: {type: String},
    pass_word: {type: String}
});

/**
 * 通过用户id查找用户
 *@param id 用户ID {String}
 * */
userSchema.statics.find_by_id = async function (id) {
    let result;
    if (!id) {
        return false;
    } else {
        await this.findOne({_id: id}).then(res => {
            console.log('静态查找', res)
            result = res;
        }).catch(err => {
            result = err;
        });
        return result;
    }

}

/**
 * 通过指定条件查找一个指定条件用户
 * @param options查找条件 {Object}
 * */
userSchema.statics.find_by_options = async function (options) {
    let result = null;
    if (!options) {
        return result;
    } else {
        await this.findOne(options).then(function (res) {
            result = res;
        }).catch(err => {
            result = err;
        });
        return result;
    }
}


//用户相关信息
module.exports = userSchema;