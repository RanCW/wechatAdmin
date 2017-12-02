/**
 * Created by ranchengwei on 2017/11/21.
 * this is about news controller
 */
const Utils = require('../utils/index');//自己写的工具类函数
const newsModel = require('../../model/News')

/**新闻新增、修改
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
exports.edit_news = async (ctx, next) => {
    let params = ctx.request.body;
    let add_obj = {
        title: params.title,//文章标题
        auth: params.auth,//作者
        sort: params.sort,//排序号
        content: params.content,//内容
        abstract: params.abstract//摘要
    };
    let id = params._id;//id—判断是编辑还是新增
    let return_obj;
    //新增
    if (Utils.isNull(id)) {
        await newsModel.create_news(add_obj).then((res) => {
            return_obj = {
                state: 1,
                message: '新增成功'
            }
        }).catch(err => {
            return_obj = {
                state: 2,
                message: err.toString()
            }
        })
    } else {//修改
        await  newsModel.update_by_id(id, add_obj).then(res => {
            return_obj = {
                state: 1,
                message: '修改成功'
            }
        }).catch(res => {
            return_obj = {
                state: 2,
                message: '修改失败'
            }
        })
    }
    ctx.body = return_obj;
}

/**
 * 查询新闻列表
 * * */
exports.get_news_list = async (ctx, next) => {
    let title = ctx.request.body.title;//文章标题
    let page_size = Number(ctx.request.body.page_size) || 10;//分页条数
    let page_index = Number(ctx.request.body.page_index) || 1;//当前页码
    let count = (page_index - 1) * page_size;
    let result = {
        message: '查询成功',
        state: 1,
        total: 0,
        data: [],
        page_index: page_index,
        page_size: page_size
    }
    if (!Utils.isNull(title)) {
        let reg = new RegExp(title, 'i'); //不区分大小写
        //关键字模糊查询
        await Promise.all([newsModel.find_by_page(title, page_size, count), newsModel.find_all_count({'title': {$regex: reg}})])
            .then(res => {
                result = {
                    message: '查询成功',
                    state: 1,
                    total: res[1],
                    data: res[0]
                }
            }).catch(res => {
            result = {
                message: '查询失败',
                state: 2,
                total: res[1],
                data: res[0]
            }
        })
    } else {
        await Promise.all([newsModel.find_by_page('', page_size, count), newsModel.find_all_count({})])
            .then(res => {
                result = {
                    message: '查询成功',
                    state: 1,
                    total: res[1],
                    data: res[0]
                }
            }).catch(res => {
            result = {
                message: '查询失败',
                state: 2,
                total: res[1],
                data: res[0]
            }
        })
    }
    ctx.body = result;
}

/**
 * 查询新闻详情
 * */
exports.get_news_detail = async (ctx, next) => {
    let id = ctx.request.body.id;
    let result;
    if (Utils.isNull(id)) {
        result = {
            message: '文章id不能为空',
            state: 2
        };
        ctx.body = result;
    } else {
        let data = await newsModel.find_by_id(id);
        result = {
            message: '成功',
            state: 1,
            data: data
        };
        ctx.body = result;
    }
}

/**删除新闻
 *
 * */
exports.delete_news = async (ctx, next) => {
    let id = ctx.request.body.id;
    let result;
    if (Utils.isNull(id)) {
        result = {
            message: '文章id不能为空',
            state: 2
        };
        ctx.body = result;
    } else {
        await newsModel.delete_news(id).then(res=>{
            result = {
                message: '删除成功',
                state: 1
            };
        }).catch(err=>{
            result = {
                message: err,
                state: 2
            };
        });
        ctx.body = result;

    }
}