const { getText, getPage } = require('translate-api');
const { isUrl } = require('../util/index');

const translateText = async(ctx, next) => {
  console.log("-----api-------")
  console.log(ctx.request.body)


  let text = ctx.request.body.text || ctx.query.t || 'hello world'

  let val = await getText(text, { to: 'zh-CN' })
  ctx.body = val
}

const translatePage = async(ctx, next) => {
  console.log("-----api-------")
  console.log(ctx.query)


  let url = ctx.query.u || 'https://nodejs.org/en/'

  if (isUrl(url)) {
    let val = await getPage(url)
    ctx.body = val
  }

}

module.exports = {
  translateText,
  translatePage
}