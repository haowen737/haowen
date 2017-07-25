/**
 * 在app.use(router)之前调用
 */
var ApiError = require('../error/ApiError');
var response_formatter = (ctx) => {
    //如果有返回数据，将返回数据添加到data中
    if (ctx.body) {
        ctx.body = ctx.body
    }
}

var url_filter = (pattern) => {
    return async (ctx, next) => {
        var reg = new RegExp(pattern);
        try {
            //先去执行路由
            await next();
        } catch (error) {
            //如果异常类型是API异常并且通过正则验证的url，将错误信息添加到响应体中返回。
            if(error instanceof ApiError && reg.test(ctx.originalUrl)){
                ctx.status = 400;
                ctx.body = {
                  code: error.code,
                  msg: error.message
                }
                return
            }
            throw error;
        }

        //通过正则的url进行格式化处理
        if(reg.test(ctx.originalUrl)){
            response_formatter(ctx);
        }
    }
}
module.exports = url_filter;
