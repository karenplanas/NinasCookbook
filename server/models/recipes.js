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

// const getRecipes = () => Recipes.find();

// const getRecipe = (id) => Recipes.findOne({ _id: id });

// https://docs.mongodb.com/manual/core/link-text-indexes/
const getRecipesByName = (searchValue) =>
  Recipes.find(
    {
      $text: {
        $search: searchValue
      }
    },
    { score: { $meta: 'textScore' } }
  ).sort({ score: { $meta: 'textScore' } });

const addRecipe = async (recipe) => {
  const r = new Recipes(recipe);
  return r.save();
};

const getUserRecipes = (userId) => {
  const userRecipes = Recipes.find({ userId });
  return userRecipes;
};

const deleteRecipe = async (recipeId) => {
  const res = await Recipes.deleteOne({ _id: recipeId });
  return res;
};

// https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
const getRecipes = async () => {
  const recipes = await Recipes.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'creator'
      }
    },
    {
      $unwind: {
        path: '$creator',
        preserveNullAndEmptyArrays: true
      }
    }
  ]);

  const averages = await getAverageRating();

  return recipes.map((recipe) => ({
    ...recipe,
    averageRating: averages.find((average) => recipe._id.equals(average._id))?.averageRating
  }));
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
    {
      $lookup: {
        // this.localField === from.foreignField => recipe.userId === users._id
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'creator'
      }
    },
    {
      $unwind: {
        path: '$creator',
        preserveNullAndEmptyArrays: true
      }
    }
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
