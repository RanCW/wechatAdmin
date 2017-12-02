/**
 * Created by ranchengwei on 2017/11/21.
 */
const Utils = require('../api/utils/index');//自己写的工具类函数
const mongoose = require('mongoose');
const news = new mongoose.Schema({
    title: {//标题
        type: String
    },
    auth: {//作者
        type: String
    },
    content: {//内容
        type: String
    },
    abstract: {//摘要
        type: String
    },
    sort: {//排序号
        type: Number
    },
    create_time: {//创建日期
        type: Date,
        default: Date.now
    }
});

/**分页查询
 * @param title 文章标题 {String}
 * @param {Number} page_size 分页大小
 * @param {Number} count 跳过的文档数量
 * @returns {Promise} 查询到的结果
 * */
news.statics.find_by_page = async function (title, page_size, count) {
    if (!Utils.isNull(title)) {//非空
        let reg = new RegExp(title, 'i'); //不区分大小写
       return await this.find({'title': {$regex: reg}}, {'content': 0}).limit(page_size).skip(count).sort({'create_time': -1});
    } else {
        return await this.find({}, {'content': 0}).limit(page_size).skip(count).sort({'create_time': -1})
    }
}
/**查询所有的总共条数
 * @param {Object} option——查找条件
 * */
news.statics.find_all_count = async function (option) {
    let rule = option;
    return await this.count(rule);
}

/**根据ID查找指定文章信息
 * @param {String} id—文章唯一id
 *@return {Promise} 返回值为查找到的东西
 * */
news.statics.find_by_id = async function (id) {
    return await this.findOne({_id: id});
}
/**根据ID更新文章信息
 * @param {String} id—文章唯一id
 * @param {Object} news—要更新的文章内容
 *@return {Promise} 返回值为查找到的东西
 * */
news.statics.update_by_id = async function (id,news) {
    return await this.update({_id: id},news);
}

/**根据ID更新文章信息
 * @param {String} id—文章唯一id
 *@return {Promise} 返回值为查找到的东西
 * */
news.statics.create_news = async function (add_obj) {
   return await this.create(add_obj)
}

/**根据ID删除指定文章
 * @param {String} id—文章唯一id
 *@return {Promise} 返回值为查找到的东西
 * */
news.statics.delete_news = async function (id) {
    let options={'_id':id};
    return await this.remove(options)
}

module.exports = news;