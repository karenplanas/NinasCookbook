const { getRecipes, addRecipe  } = require ('../models/recipes')

const getAll = async (ctx) => {
    const recipes = await getRecipes();
    ctx.status = 200;
    ctx.body = recipes;
}

const addOne = async(ctx) => {
    const recipe = await addRecipe(ctx.request.body);
    ctx.status = 201;
    ctx.body = recipe;
}

module.exports = { getAll, addOne };