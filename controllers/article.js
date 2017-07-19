const ApiError = require('../error/ApiError');

exports.getArticles = async (ctx, next) => {
  let articles = await ctx.knex.select('file_id',
    'title',
    'summary',
    'tags',
    'author',
    'thumbnail',
    'likes',
    'created_at',
    'view_count').from('articles').orderBy('file_id', 'desc');
  ctx.body = articles;
}

exports.getTags = async (ctx, next) => {
  let articles = await ctx.knex.select('*').from('articles')
  let tags = []
  articles.map((art) => {
    let tag = art.tags.split(',')
    tags = tags.concat(tag)
  })
  ctx.body = [...new Set(tags)]
}

exports.getArticlesByTag = async (ctx, next) => {
  let tag = '%' + ctx.params.tag + '%'
  let articles = await ctx.knex.select('*').from('articles').where('tags', 'like', tag)
  ctx.body = articles
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
  let paper = {}
  let fs = require('fs')
  let path = require('path')
  let filePath = path.join(__dirname, '../doc/' + id + '.md')
  paper = await ctx.knex.select('*').from('articles').where('file_id', id)
  paper = paper[0]
  paper.content = fs.readFileSync(filePath, 'utf-8')
  let cur_count = paper.view_count + 1
  await ctx.knex('articles').where('file_id', id).update('view_count', cur_count)
  ctx.body = paper
}
