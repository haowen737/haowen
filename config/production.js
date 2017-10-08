/**
 * 生产环境的配置内容
 */

module.exports = {
    env: 'production', //环境名称
    port: 8088,         //服务端口号
    mysql: {
      client: 'mysql',
      connection: {
        host: '45.32.105.50',
        port: 3306,
        user: 'haowen',
        password: 'haowen2017',
        database: 'haowen',
        charset: 'utf8',
        connectTimeout: 15000,
        stringifyObjects: false,
        multipleStatements: true,
        supportBigNumbers: true,
        connectionLimit: 1
      },
      debug: false
    },
    mongodb_url: '',    //数据库地址
    redis_url:'',       //redis地址
    redis_port: ''      //redis端口号
}
