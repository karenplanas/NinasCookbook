const Router = require('koa-router');
const recipesController = require('./controllers/controllers-recipes');
const usersController = require('./controllers/controllers-users');
const reviewController = require('./controllers/controllers-reviews');
const { authMiddleware } = require('./middlewares/auth');

const router = new Router();

// Recipe routes
router.get('/recipes', recipesController.getAll);
router.get('/recipes/:id', recipesController.getOne);
router.post('/recipes', authMiddleware, recipesController.addOne);
// Recipes by Users routes
router.get('/user/recipes', authMiddleware, recipesController.getCurrentUserRecipes);
router.delete('/user/recipes/:id', authMiddleware, recipesController.deleteOne);
router.get('/users/:userId/recipes', authMiddleware, recipesController.getUserRecipes);

// Review routes
router.get('/recipes/:recipeId/reviews', authMiddleware, reviewController.addOneReview);

// User routes
router.post('/register', usersController.create);
router.post('/login', usersController.login);
router.get('/me', authMiddleware, usersController.getOne);

module.exports = router;
