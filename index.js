let serve = require('koa-static-server');
let koa = require('koa');

let app = koa();

// serve static
app.use(serve({rootDir: 'client/dist'}));
app.use(function* (next) {
  console.log(this.request)
})
app.on('error', (err) => {
  console.log(err)
})
app.listen(3000);
console.log('listening at 3000');
