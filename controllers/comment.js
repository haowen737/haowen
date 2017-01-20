const ApiError = require('../error/ApiError');

exports.getComments = async (ctx, next) => {
  let comments = await ctx.knex.select('*').from('comments').whereNull('parent_id');
  console.log(comments);
  ctx.body = comments
}

exports.getReply = async (ctx, next) => {
  let id = ctx.params.id
  let reply = await ctx.knex('comments').where('parent_id', id);
  ctx.body = reply
}

exports.addComment = async (ctx, next) => {
  let userName = ctx.request.body.userName;
  let comment = ctx.request.body.content;
  let date = new Date();
  await ctx.knex('comments').insert({user_name: userName, content: comment, created_at: date})
  ctx.body = {
    code: 200,
    message: '评论成功'
  }
 }

 exports.addReply = async (ctx, next) => {
   let userName = ctx.request.body.user_name
   let content = ctx.request.body.content
   let parentName = ctx.request.body.parent_name || null
   let parent_id = ctx.request.body.parent_id
   let date = new Date()
   await ctx.knex('comments').insert({user_name: userName, content: content, created_at: date, parent_name: parentName, parent_id: parent_id})
   ctx.body = {
     code: 200,
     message: '回复成功'
   }
 }
