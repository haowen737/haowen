const ApiError = require('../error/ApiError');

exports.getComments = async (ctx, next) => {
  let comments = await ctx.knex.select().table('comments')
  ctx.body = comments
}
