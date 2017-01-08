const ApiError = require('../error/ApiError');

exports.getComments = async (ctx, next) => {
  let comments = await ctx.knex.select().table('comments')
  ctx.body = comments
}

exports.addComment = async (ctx, next) => {
  let name = ctx.request.body.name;
  let comment = ctx.request.body.content;
  let date = new Date()
  await ctx.knex('comments').insert({name: name, content: comment, date: date})
  ctx.body = {
    code: 200,
    message: '评论成功'
  }
 }
