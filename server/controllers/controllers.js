const { getRecipes, addRecipe, getRecipe, getRecipesByName  } = require ('../models/recipes')

const getAll = async (ctx) => {
    const { searchValue } = ctx.request.query;
    const recipes = searchValue ? await getRecipesByName(searchValue) : await getRecipes() 
    ctx.status = 200;
    ctx.body = recipes;
}

const addOne = async(ctx) => {
    const recipe = await addRecipe(ctx.request.body);
    ctx.status = 201;
    ctx.body = recipe;
}

const getOne = async(ctx) => {
    ctx.body = await getRecipe(ctx.params.id);
    ctx.status = 200;

}

module.exports = { getAll, addOne, getOne };