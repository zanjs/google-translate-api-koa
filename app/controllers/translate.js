const { getText } = require('translate-api');

const translateText = async(ctx, next) => {
  console.log("-----api-------")
  console.log(ctx.request.body)


  let text = ctx.request.body.text || 'hello world'

  let val = await getText(text, { to: 'zh-CN' })
  ctx.body = val
}

module.exports = {
  translateText
}