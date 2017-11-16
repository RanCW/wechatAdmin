const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const session = require('koa-session2')

const index = require('./routes/index')
//跨域设置start
const users = require('./routes/users')
var cors = require('koa2-cors')
app.use(cors());
//跨域设置end

//koa-session设置start
var session_option={
  key: 'wechat', /** (string) cookie key (default is koa:sess) */
  domain:'localhost',
  maxAge:86400000,
  httpOnly:true
}
app.use(session(session_option, app));
//koa-session设置end

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
//连接数据库
mongoose.connect('localhost','27017',function (error) {
  if (error){
    console.log('连接数据库失败')
  }else{
    console.log('连接数据库成功');
  }
});
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
