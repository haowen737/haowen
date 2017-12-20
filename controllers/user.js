const ApiError = require('../error/ApiError');
// const ApiErrorNames = require('../error/ApiErrorNames');
//获取用户
exports.getUser = async (ctx, next) => {
    let id = ctx.params.id
    if (!id) {
      throw new ApiError({code: 10001, message: '用户id不正确'});
      return
    }
    let user = await ctx.knex.select('*').from('users').where('id', id)
    user = user[0]
    ctx.body = {
      code: 10000,
      user
    }
}

//用户注册
exports.registerUser = async (ctx, next) => {
    let userName = ctx.request.body.user_name
    let password = ctx.request.body.user_password
    if (!userName || !password) {
      throw new ApiError({code: 100001, message: '缺少必填项'})
    }
    if (userName && password) {
      await ctx.knex('users').insert({
        user_name: userName,
        user_password: password,
        created_at: new Date()
      })
      ctx.body = {
        code: 10002,
        msg: '用户创建成功'
      }
    }
}

//用户登录
// login现在主要是作为检查数据库中是否存在这个用户
// withyoufriends现在并不做账号密码式的登录
// mysql中能查询到当前调用login的用户就为成功
// 否则返回为false，用户需要输入一个昵称来注册
exports.login = async (ctx, next) => {
  let email = ctx.request.body.email
  let user = await ctx.knex('users').where('email', email).first()
  if (!user) {
    await ctx.knex('users').insert({ email })
  }
  user = await ctx.knex('users').where('email', email).first()
  ctx.body = user
}
// exports.login = async (ctx, next) => {
//   let userName = ctx.request.body.user_name
//   let password = ctx.request.body.user_password
//   let cur_user = await ctx.knex.select('*').from('users').where('user_name', userName)
//   cur_user = cur_user[0]
//   if (!userName || !password) {
//     throw new ApiError({code: 100001, message: '缺少必填项'})
//   }
//   if (userName && password) {
//     console.log(cur_user.userName, '===', userName, '===', cur_user.password, '===', password);
//     if (cur_user.user_name === userName && cur_user.user_password === password) {
//       ctx.body = {
//         code: 10000,
//         msg: '登陆成功',
//         account: cur_user
//       }
//     } else {
//       throw new ApiError({code: 100002, message: '密码错误'})
//     }
//   }
// }

//用户资料更新
exports.update = async (ctx, next) => {
  console.log('----->', ctx.request.body)
  let id = ctx.request.body.id
  let nickname = ctx.request.body.nickName
  let phone = ctx.request.body.phone
  let motto = ctx.request.body.motto
  let gender = ctx.request.body.gender
  let avatar = ctx.request.body.avatar
  await ctx.knex('users')
    .where('id', id)
    .update({
      nick_name: nickname || null,
      phone: phone || null,
      gender: gender || null,
      avatar: avatar || null,
      motto: motto || null,
      updated_at: new Date()
    })
  let user = await ctx.knex('users').where('id', id).first()
  ctx.body = user
}
