const ApiError = require('../error/ApiError');
// const ApiErrorNames = require('../error/ApiErrorNames');
//获取用户
exports.getUser = async (ctx, next) => {
    ctx.body = {
        username: '阿，希爸',
        age: 30
    }
}

//用户注册
exports.registerUser = async (ctx, next) => {
    let userName = ctx.request.body.user_name
    if (!userName) {
      throw new ApiError({code: 10002, message: '请输入用户名'});
    }
    console.log('username=======', userName);
    let cur_user = await ctx.knex('users').where('name', userName)
    console.log('cur_user=========', cur_user);
    if (cur_user.length) {
      ctx.body = {
        code: 10001,
        message: '用户名获取成功'
      }
    } else {
      await ctx.knex('users').insert({name: userName, phone: '12312312312'})
      ctx.body = {
        code: 10000,
        message: '新用户，已插入成功'
      }
    }
    console.log('registerUser', ctx.request.body);
}
