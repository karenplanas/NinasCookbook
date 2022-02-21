const Router = require('koa-router');
const recepiesController = require('./controllers/controllers')

const router = new Router();

router.get('/recipes', recepiesController.getAll);
router.get('/recipes/:id', recepiesController.getOne);
router.post('/recipes', recepiesController.addOne);

module.exports = router;