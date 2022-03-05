const Router = require('koa-router');
const RecipesController = require('./controllers/recipes');
const UsersController = require('./controllers/users');
const ReviewsController = require('./controllers/reviews');
const { authMiddleware } = require('./middlewares/auth');

const router = new Router();

// Recipe routes
router.get('/recipes', RecipesController.getAll);
router.get('/recipes/:id', RecipesController.getOne);
router.post('/recipes', authMiddleware, RecipesController.addOne);
// Recipes by Users routes
router.get('/user/recipes', authMiddleware, RecipesController.getCurrentUserRecipes);
router.delete('/user/recipes/:id', authMiddleware, RecipesController.deleteOne);
router.get('/users/:userId/recipes', authMiddleware, RecipesController.getUserRecipes);

// Review routes
router.post('/recipes/:recipeId/reviews', authMiddleware, ReviewsController.addOne);
router.get('/recipes/:recipeId/reviews', authMiddleware, ReviewsController.getAll);

// User routes
router.post('/register', UsersController.create);
router.post('/login', UsersController.login);
router.get('/me', authMiddleware, UsersController.getOne);

module.exports = router;
