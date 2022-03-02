const Router = require('koa-router');
const recepiesController = require('./controllers/controllers-recipes')
const usersController = require('./controllers/controllers-users')

const router = new Router();

router.get('/recipes', recepiesController.getAll);
router.get('/recipes/:id', recepiesController.getOne);
router.post('/recipes', recepiesController.addOne);

router.post('/register', usersController.create)
router.get('/register', usersController.getAll)

module.exports = router;