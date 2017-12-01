const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')

const index = require('./routes/index')
//用户模块api
const user_controller=require('./api/user/index')
//跨域设置start
const users = require('./routes/users')
const news_router = require('./routes/news')
var cors = require('koa2-cors')
app.use(cors());
//跨域设置end

//koa-session设置start
//koa-session设置end

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/views'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  //  设置cookie跨域,生产环境下要注释掉
    ctx.set('Access-Control-Allow-Origin','http://localhost:8080');
    ctx.set('Access-Control-Allow-Credentials',true);
  //  设置cookie跨域end
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
//用户登录注册
app.use(users.routes(), users.allowedMethods())
//连接数据库
mongoose.Promise = require('bluebird');
const options = {
    promiseLibrary: global.Promise,
    useMongoClient: true,
};
mongoose.connect('mongodb://localhost:27017/27017',options).then(function(error) {
    // if (error){
    //     console.log('连接数据库失败')
    // }else{
        console.log('连接数据库成功');
        //用户登录注册
        app.use(users.routes(), users.allowedMethods())
        //用户登录校验
        app.use(user_controller.checkUserLogin)
        //新闻模块
        app.use(news_router.routes(), news_router.allowedMethods())
    // }
}).catch(function (err) {
    console.log('连接数据库失败')

})
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
