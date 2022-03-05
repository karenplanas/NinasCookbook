const ReviewModel = require('../models/reviews');

const addOne = async (ctx) => {
  const { recipeId } = ctx.params;
  const userId = ctx.request.user._id;
  const review = await ReviewModel.addReview({ ...ctx.request.body, recipeId, userId });
  ctx.status = 201;
  ctx.body = review;
};

const getAll = async (ctx) => {
  const { recipeId } = ctx.params;
  const reviews = await ReviewModel.getRecipeReviews(recipeId);
  ctx.status = 200;
  ctx.body = reviews;
};

module.exports = { addOne, getAll };
