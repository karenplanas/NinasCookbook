const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const { getAverageRatingForRecipe, getAverageRating } = require('./reviews');

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true },
    description: { type: String },
    pictures: [{ type: { type: String, url: String } }],
    ingredients: [{ quantity: Number, name: String }],
    steps: [{ name: String, content: String }],
    serving: { type: String },
    image: {
      type: {
        url: String,
        publicId: String
      }
    }
  },
  {
    timestamps: true
  }
);

recipeSchema.index({ name: 'text', 'ingredients.name': 'text' });

const Recipes = model('recipes', recipeSchema, 'recipes');

const injectAverageRating = async (recipes) => {
  const averages = await getAverageRating();
  return recipes.map((recipe) => ({
    ...recipe,
    averageRating: averages.find((average) => recipe._id.equals(average._id))?.averageRating
  }));
};

// https://docs.mongodb.com/manual/core/link-text-indexes/
const addRecipe = async (recipe) => {
  const r = new Recipes(recipe);
  return r.save();
};

const deleteRecipe = async (recipeId) => {
  const res = await Recipes.deleteOne({ _id: recipeId });
  return res;
};

const getUserRecipes = async (userId) => {
  const userRecipes = await Recipes.find({ userId }).then((r) => r.map((recipe) => recipe._doc));
  return injectAverageRating(userRecipes);
};

const lookUpUser = {
  $lookup: {
    // this.localField === from.foreignField => recipe.userId === users._id
    from: 'users',
    localField: 'userId',
    foreignField: '_id',
    as: 'creator'
  }
};

const unwindUser = {
  $unwind: {
    path: '$creator',
    preserveNullAndEmptyArrays: true
  }
};

const joinCreator = [lookUpUser, unwindUser];

// https://docs.mongodb.com/manual/tutorial/text-search-in-aggregation/
const getRecipesByName = async (searchValue) => {
  const recipes = await Recipes.aggregate([
    {
      $match: {
        $text: {
          $search: searchValue
        }
      }
    },
    { $sort: { score: { $meta: 'textScore' } } },
    ...joinCreator
  ]);

  return injectAverageRating(recipes);
};

// https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
const getRecipes = async () => {
  const recipes = await Recipes.aggregate([
    ...joinCreator,
    {
      $sort: {
        createdAt: -1
      }
    }
  ]);
  return injectAverageRating(recipes);
};

// https://docs.mongodb.com/manual/core/aggregation-pipeline/
// https://docs.mongodb.com/manual/reference/operator/aggregation/match/
const getRecipe = async (id) => {
  const recipe = await Recipes.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id)
      }
    },
    ...joinCreator
  ]).then((result) => result[0]);

  recipe.averageRating = (await getAverageRatingForRecipe(id))?.averageRating;
  return recipe;
};

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe,
  getRecipesByName,
  getUserRecipes,
  deleteRecipe
};
