const ApiError = require('../error/ApiError');
const MailSender = require('./../deps/mailSender');

exports.getComments = async (ctx, next) => {
  console.log('ctx====', ctx)
  
  let comments = await ctx.knex('comments as c')
  .whereNull('parent_id')
  .leftJoin('users as u', 'c.user_id', 'u.id')
  .select(
    'c.id',
    'c.content',
    'c.reply_count',
    'c.created_at',
    'u.user_name'
  )

  let reply = await ctx.knex('comments as c')
  .whereNotNull('parent_id')
  .leftJoin('users as u', 'c.user_id', 'u.id')
  .select(
    'c.parent_id',
    'c.content',
    'c.reply_count',
    'c.created_at',
    'u.user_name'
  )

  console.log('------>get reply<------', reply)

  comments.map((comment) => {
    let children = findReply(comment.id, reply) || []
    comment.children = children
  })

  function findReply (target, arr) {
    let box = []
    arr.find((n) => {
      if (n.parent_id === target ) {
        box.push(n)
      }
    })
    return box
  }
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
  let userQuery = await ctx.knex('users as u')
    .select('u.id')
    .where({user_name: userName})

  let user = userQuery.length ? userQuery[0] : {}

  if (!user.id) {// 未查询到的新用户插入users表
    let id = await ctx.knex('users').insert({user_name: userName}).returning('id')
    user.id = id[0]
  }

  await ctx.knex('comments').insert({content: comment, created_at: date, user_id: user.id})

  MailSender({
    subject: '收到新回复', // Subject line
    text: `用户名：${userName}，回复内容：${comment}，userAgent: ${ctx.header['user-agent']}` // plain text body
  })

  ctx.body = {
    code: 200,
    message: '评论成功'
  }
 }

exports.addReply = async (ctx, next) => {
  let userName = ctx.request.body.userName
  let content = ctx.request.body.content
  let parentName = ctx.request.body.parent_name || null
  let parent_id = ctx.request.body.parent_id
  let date = new Date()

  let userQuery = await ctx.knex('users as u')
    .select('u.id')
    .where({user_name: userName})

  let user = userQuery.length ? userQuery[0] : {}

  if (!user.id) {// 未查询到的新用户插入users表
    let id = await ctx.knex('users').insert({user_name: userName}).returning('id')
    user.id = id[0]
  }

  await ctx.knex('comments').insert({user_id: user.id, content: content, created_at: date, parent_name: parentName, parent_id: parent_id})

  MailSender({
    subject: '收到新回复', // Subject line
    text: `用户名：${userName}，回复内容：${content}` // plain text body
  })

  ctx.body = {
    code: 200,
    message: '回复成功'
  }
}
