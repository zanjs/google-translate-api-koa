const Koa = require('koa');
const app = new Koa();
const { getText } = require('translate-api');

app.use(async(ctx, next) => {

  let transText = 'hello world!';
  let val = await getText(transText, { to: 'zh-CN' })

  ctx.body = val;

});

app.listen(3000);