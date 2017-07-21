// const ApiErrorNames = require('./ApiErrorNames');

/**
 * 自定义Api异常
 */
class ApiError extends Error{
    //构造方法
    // constructor(error_name){
    constructor(err){
        super();

        this.code = err.code;
        this.message = err.msg;
    }
}

module.exports = ApiError;
