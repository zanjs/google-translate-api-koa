const Router = require('koa-router');
const { translateText, translatePage } = require('./controllers/translate');

const router = Router({
  prefix: '/api/translate'
});

router.post('/text', translateText);
router.get('/text', translateText);
router.get('/page', translatePage);

module.exports = router;