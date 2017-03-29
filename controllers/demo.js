const ApiError = require('../error/ApiError');

exports.getDemos = async (ctx, next) => {
  ctx.body = await ctx.knex.select('*').from('demos').orderBy('id', 'desc');
}
