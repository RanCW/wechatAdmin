const router = require('koa-router')()
//用户相关方法
const user_controller=require('../api/user')

router.prefix('/users')

//用户注册
router.all('/user_register', user_controller.user_register)
//用户登录
router.all('/user_login', user_controller.user_login)

module.exports = router
