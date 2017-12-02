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
    if (!id) {
        return false;
    } else {
        return await this.findOne({_id: id});
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
     return  await this.findOne(options);
    }
}


//用户相关信息
module.exports = userSchema;