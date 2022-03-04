const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  description: { type: String },
  pictures:[{ type: { type: String, url: String }}],
  ingredients: [{quantity: Number, name:String }],
  steps: [{name:String, content: String }],
  serving: { type: String },
})

recipeSchema.index({ name: 'text', 'ingredients.name': 'text' })

const Recipes = model('recipes', recipeSchema, 'recipes');

const getRecipes = () => Recipes.find()

const getRecipe = (id) => Recipes.findOne({_id:id});


// https://docs.mongodb.com/manual/core/link-text-indexes/
const getRecipesByName = (searchValue) => Recipes.find(
  {
    $text: {
      $search: searchValue
    },
  },
  { score: { $meta: "textScore" } }
).sort( { score: { $meta: "textScore" } } )
  
const addRecipe = async (recipe) => {
    const r = new Recipes(recipe);
    return r.save();
}

const getUserRecipes = (userId) => {
  const userRecipes = Recipes.find({userId});
  return userRecipes;
}


module.exports = { getRecipes, addRecipe, getRecipe, getRecipesByName, getUserRecipes };