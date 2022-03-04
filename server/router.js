const Router = require('koa-router');
const recipesController = require('./controllers/controllers-recipes')
const usersController = require('./controllers/controllers-users')
const { authMiddleware } = require('./middlewares/auth')

const router = new Router();

//Recipe routes
router.get('/recipes', recipesController.getAll);
router.get('/recipes/:id', recipesController.getOne);
router.post('/recipes', authMiddleware, recipesController.addOne);

//User routes
router.post('/register', usersController.create);
router.post('/login', usersController.login);
router.get('/me', authMiddleware, usersController.getOne);

//Profile routes
router.get('/user/recipes', authMiddleware, recipesController.getCurrentUserRecipes);

router.get('/users/:userId/recipes', authMiddleware, recipesController.getUserRecipes);

module.exports = router;