const Koa = require('koa');
const app = new Koa();

const bodyparser = require('koa-bodyparser')();
const router = require('koa-router')();
const convert = require('koa-convert');
const onerror = require('koa-onerror');
// const logger = require('koa-logger');
const log4js = require('log4js');
const logger = log4js.getLogger();
const config = require('./config');
const views = require('koa-views');
const json = require('koa-json');

//log工具
const logUtil = require('./utils/log_utils');

// const mysql = require('mysql');
// const wrapper = require('co-mysql');
const knex = require('./lib/knex');

const api = require('./routes/api');
const response_formatter = require('./middlewares/response_formatter');

// middlewares
app.use(knex(config.mysql));

app.use(convert(bodyparser));
app.use(convert(json()));
// app.use(convert(logger()));
app.use(response_formatter('^/api'));
app.use(require('koa-static')(__dirname + '/client/dist'));
router.use('/api', api.routes(), api.allowedMethods());


// logger
// app.use(async (ctx, next) => {
//   const start = new Date();
//   var ms;
//   try {
//     await next();
//     ms = new Date() - start;
//     logUtil.logResponse(ctx, ms);
//   } catch (error) {
//     ms = new Date() - start;
//     logUtil.logError(ctx, error, ms);
//     throw error
//   }
// });

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});

module.exports = app;
