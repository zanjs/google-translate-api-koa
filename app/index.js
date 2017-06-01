const Koa = require('koa');
const views = require('koa-views');
const convert = require('koa-convert');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const methodOverride = require('koa-methodoverride');
const logger = require('koa-logger');
const app = new Koa();
const path = require('path');
const { getText } = require('translate-api');

const router = require('./routes');
const middlewares = require('./middlewares');


app.use(convert(require('koa-static')(path.join(__dirname + '/../public'))));

app.use(bodyParser());
app.use(methodOverride((req, _res) => {
  if (req.body && (typeof req.body === 'object') && ('_method' in req.body)) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(convert(json()));
app.use(convert(logger()));

app.use(views(__dirname + '/views', { extension: 'pug' }));

// catch error
app.use(middlewares.catchError);

app.use(router.routes());

// app.use(async(ctx, next) => {

//   let transText = 'hello world!';
//   let val = await getText(transText, { to: 'zh-CN' })

//   ctx.body = val;

// });

app.listen(8700);