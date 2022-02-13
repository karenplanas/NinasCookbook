const Router = require('koa-router');
const recepiesController = require('./controllers/controllers')

const router = new Router();

router.get('/recepies', recepiesController.getAll);
router.post('/recepies', recepiesController.addOne);

module.exports = router;