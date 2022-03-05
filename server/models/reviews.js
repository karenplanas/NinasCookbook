const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  rating: { type: Number, max: 5 },
  comment: String,
  userId: String,
  recipeId: String
});

// A user can only give one review to a recipe
// https://mongoosejs.com/docs/2.7.x/docs/indexes.html
reviewSchema.index({ userId: 1, recipeId: 1 }, { unique: true });

const Review = model('review', reviewSchema);

const addReview = async (review) => {
  const newReview = await Review.create(review);
  return newReview;
};

const getRecipeReviews = async (recipeId) => {
  const reviews = Review.find({ recipeId });
  return reviews;
};

module.exports = { addReview, getRecipeReviews };
