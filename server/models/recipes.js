const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  pictures:[{ type: { type: String, url: String }}],
  ingredients: [{quantity: Number, name:String}],
  steps: [{name:String, content: String}],
  serving: { type: String },
})

const Recipes = model('recipes', recipeSchema, 'recipes');

const getRecipes = () => Recipes.find()

const addRecipe = async (recipe) => {
    const r = new Recipes(recipe);
    return r.save();
}

const getRecipe = (id) => Recipes.findOne({_id:id});

module.exports = { getRecipes, addRecipe, getRecipe };