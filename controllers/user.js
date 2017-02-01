const ApiError = require('../error/ApiError');
// const ApiErrorNames = require('../error/ApiErrorNames');
//获取用户
exports.getUser = async (ctx, next) => {
    ctx.body = {
        username: '阿，希爸',
        age: 30
    }
}

//用户注册&登录
exports.registerUser = async (ctx, next) => {
    let userName = ctx.request.body.user_name
    let password = ctx.request.body.user_password
    if (!userName) {
      throw new ApiError({code: 10002, message: '请输入用户名'});
      return
    }
    if (userName && !password) {
      let cur_user = await ctx.knex.select('*').from('users').where('user_name', userName)
      cur_user = cur_user[0]
      if (cur_user) {
        ctx.body = cur_user
        return
      }
      if (!cur_user) {
        ctx.body = {
          code: 40001,
          msg: '用户未注册'
        }
        return
      }
    }
    if (userName && password) {
      await ctx.knex('users').insert({
        user_name: userName,
        user_password: password
      })
      ctx.body = {
        code: 10002,
        msg: '用户创建成功'
      }
    }
}

exports.login = async (ctx, next) => {
  let userName = ctx.request.body.user_name
  let password = ctx.request.body.user_password
  let cur_user = await ctx.knex.select('*').from('users').where('user_name', userName)
  cur_user = cur_user[0]
  if (userName && !password) {
    console.log('userName && !password')
    if (cur_user) {
      ctx.body = {
        code: 10001,
        msg: '用户存在，输入密码'
      }
      return
    }
    if (!cur_user) {
      ctx.body = {
        code: 40001,
        msg: '用户未注册'
      }
      return
    }
  }
  if (userName && password) {
    console.log(cur_user.userName, '===', userName, '===', cur_user.password, '===', password);
    if (cur_user.user_name === userName && cur_user.user_password === password) {
      ctx.body = {
        code: 10000,
        msg: '登陆成功',
        account: cur_user
      }
      return
    } else {
      ctx.body = {
        code: 40002,
        msg: '密码错误'
      }
      return
    }
  }
}
