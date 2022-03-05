const { addReview } = require('../models/review');

const addOneReview = async (ctx) => {
  const { recipeId } = ctx.params;
  const userId = ctx.request.user._id;
  const review = await addReview({ ...ctx.request.body, recipeId, userId });
  ctx.status = 201;
  ctx.body = review;
};

module.exports = { addOneReview };
