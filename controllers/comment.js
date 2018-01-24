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
    'u.nick_name'
  )

  let reply = await ctx.knex('replys as r')
  .whereNotNull('parent_id')
  .leftJoin('users as u', 'r.user_id', 'u.id')
  .leftJoin('users as replyto', 'r.reply_to', 'replyto.id')
  .select(
    'r.parent_id',
    'r.content',
    'r.created_at',
    'u.nick_name',
    'u.id as user_id',
    'replyto.id as reply_to',
    'replyto.nick_name as reply_to_name'
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
  let user = ctx.request.body.user;
  let comment = ctx.request.body.content;
  let date = new Date();
  // let userQuery = await ctx.knex('users as u')
  //   .select('u.id')
  //   .where({id: user.id})
  //   .first()

  if (!user) {
    throw new ApiError({ code: 10004, msg: '缺少用户资料' })
  }

  await ctx.knex('comments').insert({
    content: comment,
    created_at: date,
    user_id: user.id
  })

  MailSender({
    subject: '收到新评论', // Subject line
    text: `用户名：${user.nick_name}，邮箱：${user.email}，回复内容：${comment}，userAgent: ${ctx.header['user-agent']}` // plain text body
  })

  ctx.body = {
    code: 200,
    message: '评论成功'
  }
 }

exports.addReply = async (ctx, next) => {
  const userId = ctx.request.body.userId
  const content = ctx.request.body.content
  const parentId = ctx.request.body.parentId || null
  let replyToUser = ctx.request.body.replyToUser || null
  const date = new Date()

  const user = await ctx.knex('users as u')
    .select()
    .where('id', userId)
    .first()


  if (!user.id) {// 未查询到的新用户插入users表
    throw new ApiError({ code: 10004, msg: '缺少用户资料' })
  }

  if (!replyToUser) {
    // 回复comment表中的评论
    const parentComment = await ctx.knex('comments')
      .select()
      .where('id', parentId)
      .first()

    replyToUser = parentComment.user_id
  }

  const targetUser = await ctx.knex('users as u')
    .select()
    .where('id', replyToUser)
    .first()

  MailSender({
    to: targetUser.email,
    subject: '来自withyoufriends的新回复', // Subject line
    text: `用户名：${user.nick_name}对你回复说：${content}` // plain text body
  })

  await ctx.knex('replys').insert({
    user_id: userId,
    content: content,
    created_at: date,
    parent_id: parentId,
    reply_to: replyToUser
  })

  ctx.body = {
    code: 200,
    message: '回复成功'
  }
}
