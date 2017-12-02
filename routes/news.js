/**
 * Created by ranchengwei on 2017/11/21.
 */
const router=require('koa-router')()
const news_controller=require('../api/news/index')

router.prefix('/news')


//新增新闻
router.all('/edit_news',news_controller.edit_news)
/**
 * 查询新闻列表
 * */
router.all('/get_news_list',news_controller.get_news_list)
/**
 * 获取新闻详情
 *
 * */
router.all('/get_news_detail',news_controller.get_news_detail)
/**
 * 删除新闻
 *
 * */
router.all('/delete_news',news_controller.delete_news)


module.exports=router
