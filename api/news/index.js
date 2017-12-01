/**
 * Created by ranchengwei on 2017/11/21.
 * this is about news controller
 */
const Utils = require('../utils/index');//自己写的工具类函数
const newsModel = require('../../model/News')

/**新闻新增
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
exports.add_news = async (ctx, next) => {
  let add_obj = ctx.request.body;
  let return_obj;
  await newsModel.create(add_obj).then((res) => {
    return_obj = {
      state: 1,
      message: '新增成功'
    }
    ctx.body = return_obj;
  }).catch(err => {
    return_obj = {
      state: 1,
      message: err.toString()
    }
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
  let title = ctx.request.body.title;//文章标题
  let page_size = Number(ctx.request.body.page_size)||10;//分页条数
  let page_index = Number(ctx.request.body.page_index)||1;//当前页码
  let count=(page_index-1)*page_size;
  let data,total;
  if (!Utils.isNull(title)) {
    //关键字模糊查询
    data = await newsModel.find_by_page(title, page_size, count);
    total = await newsModel.find_all_count({"title":title});
  } else {
    data = await newsModel.find_by_page('', page_size, count);
    total = await newsModel.find_all_count({});
  }
  ctx.body = {
    message: '查询成功',
    state: 1,
    total: total,
    data: data,
    page_index:page_index,
    page_size:page_size
  };
}