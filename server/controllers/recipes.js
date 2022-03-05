const RecipeModel = require('../models/recipes');

const getOne = async (ctx) => {
  ctx.body = await RecipeModel.getRecipe(ctx.params.id);
  ctx.status = 200;
};

const getAll = async (ctx) => {
  const { searchValue } = ctx.request.query;
  const recipes = searchValue ? await RecipeModel.getRecipesByName(searchValue) : await RecipeModel.getRecipes();
  ctx.status = 200;
  ctx.body = recipes;
};

const addOne = async (ctx) => {
  const recipe = await RecipeModel.addRecipe({
    ...ctx.request.body,
    userId: ctx.request.user._id
  });
  ctx.status = 201;
  ctx.body = recipe;
};

const deleteOne = async (ctx) => {
  ctx.body = await RecipeModel.deleteRecipe(ctx.params.id);
  ctx.state = 204;
};

const getUserRecipes = async (ctx) => {
  const { userId } = ctx.params;
  const recipes = await RecipeModel.getUserRecipes(userId);
  ctx.status = 200;
  ctx.body = recipes;
};

const getCurrentUserRecipes = async (ctx) => {
  const userId = ctx.request.user._id;
  const recipes = await RecipeModel.getUserRecipes(userId);
  ctx.status = 200;
  ctx.body = recipes;
};

module.exports = {
  getAll,
  addOne,
  getOne,
  getUserRecipes,
  getCurrentUserRecipes,
  deleteOne
};
