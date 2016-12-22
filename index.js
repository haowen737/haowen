let serve = require('koa-static-server');
let markdown = require('markdown');
let koa = require('koa');

let conf = require('./conf');

const app = koa();
console.log(app);
// serve static
app.use(serve({rootDir: 'client/dist'}));

app.listen(80);
console.log('listening at ' + conf.port);
