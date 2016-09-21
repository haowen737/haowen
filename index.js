let serve = require('koa-static-server');
let markdown = require('markdown')
let koa = require('koa');

let app = koa();

// serve static
app.use(serve({rootDir: 'client/dist'}));

app.listen(80);
console.log('listening at 80');
