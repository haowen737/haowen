const ApiError = require('../error/ApiError');

exports.getArticles = async (ctx, next) => {
  let articles = await ctx.knex.select('*').from('articles').orderBy('file_id', 'desc');
  ctx.body = articles;
  console.log(articles);
}
 exports.likeArticles = async (ctx, next) => {
   let id = ctx.request.body.id
   console.log(ctx.request.body);
   if (ctx.request.body.id) {
// TODO: apiapiapiapi
   }
 }
