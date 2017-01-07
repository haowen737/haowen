const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const config = require('./config');

// const mysql = require('mysql');
// const wrapper = require('co-mysql');
const knex = require('./lib/knex');

const api = require('./routes/api');
const response_formatter = require('./middlewares/response_formatter');

// middlewares
app.use(knex(config.mysql));

app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(response_formatter('^/api'));
app.use(require('koa-static')(__dirname + '/client/dist'));
router.use('/api', api.routes(), api.allowedMethods());


// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});

module.exports = app;
