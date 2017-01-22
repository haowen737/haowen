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
      console.log('***********yyyyyyyyyyyyy');
    }
    // let cur_user = await ctx.knex('users').where('name', userName)
    // if (cur_user.length) {
    //   ctx.body = {
    //     code: 10001,
    //     message: '用户名获取成功'
    //   }
    // } else {
    //   await ctx.knex('users').insert({name: userName, phone: '12312312312'})
    //   ctx.body = {
    //     code: 10000,
    //     message: '新用户，已插入成功'
    //   }
    // }
}
