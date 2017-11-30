/**
 * Created by ranchengwei on 2017/11/21.
 */
const router=require('koa-router')()
const news_controller=require('../api/news/index')

router.prefix('/news')


//新增新闻
router.all('/add_news',news_controller.add_news)
/**
 * 查询新闻列表
 * */
router.all('/get_news_list',news_controller.get_news_list)


module.exports=router
