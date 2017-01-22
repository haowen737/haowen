const ApiError = require('../error/ApiError');

exports.getArticles = async (ctx, next) => {
  let articles = await ctx.knex.select('*').from('articles').orderBy('file_id', 'desc');
  ctx.body = articles;
  console.log(articles);
}
 exports.likeArticles = async (ctx, next) => {
   let id = ctx.request.body.id
   if (id) {
     let cur_likes = await ctx.knex.select('likes').from('articles').where('file_id', id)
     cur_likes = cur_likes[0].likes + 1
     await ctx.knex('articles').where('file_id', id).update('likes', cur_likes)
   }
   ctx.body = {
     msg: 'success'
   }
 }

 exports.getArticle = async (ctx, next) => {
   let id = ctx.params.id
   let paper
   if (id) {
     paper = await ctx.knex.select('*').from('articles').where('file_id', id)
     paper = paper[0]
     let cur_count = paper.view_count + 1
     await ctx.knex('articles').where('file_id', id).update('view_count', cur_count)
   }
   ctx.body = paper
 }
