const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const reviewSchema = new Schema(
  {
    rating: { type: Number, max: 5 },
    comment: String,
    userId: mongoose.Types.ObjectId,
    recipeId: mongoose.Types.ObjectId
  },
  {
    timestamps: true
  }
);

// A user can only give one review to a recipe
// https://mongoosejs.com/docs/2.7.x/docs/indexes.html
reviewSchema.index({ userId: 1, recipeId: 1 }, { unique: true });

const Review = model('review', reviewSchema);

const addReview = async (review) => {
  const newReview = await Review.create(review);
  return newReview;
};

const getRecipeReviews = async (recipeId) =>
  Review.aggregate([
    {
      $match: {
        recipeId: mongoose.Types.ObjectId(recipeId)
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'reviewer'
      }
    },
    {
      $unwind: {
        path: '$reviewer',
        preserveNullAndEmptyArrays: true
      }
    }
  ]);
// https://docs.mongodb.com/manual/reference/operator/aggregation/avg/
// Group by recipe id and calculate the average rating
const getAverageRating = () =>
  Review.aggregate([
    {
      $group: {
        _id: '$recipeId',
        averageRating: { $avg: '$rating' }
      }
    }
  ]);

const getAverageRatingForRecipe = (recipeId) =>
  Review.aggregate([
    {
      $match: {
        recipeId: new mongoose.Types.ObjectId(recipeId)
      }
    },
    {
      $group: {
        _id: '$recipeId',
        averageRating: { $avg: '$rating' }
      }
    }
  ]).then((result) => result[0]);

module.exports = { addReview, getRecipeReviews, getAverageRating, getAverageRatingForRecipe };
