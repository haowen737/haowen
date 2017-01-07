// const ApiErrorNames = require('./ApiErrorNames');

/**
 * 自定义Api异常
 */
class ApiError extends Error{
    //构造方法
    // constructor(error_name){
    constructor(err){
        super();

        // var error_info = ApiErrorNames.getErrorInfo(error_name);

        // this.name = error_name;
        // this.code = error_info.code;
        this.code = err.code;
        // this.message = error_info.message;
        this.message = err.message;
    }
}

module.exports = ApiError;
