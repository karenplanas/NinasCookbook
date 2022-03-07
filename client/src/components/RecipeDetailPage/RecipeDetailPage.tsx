import React, { useEffect, useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import { Recipe } from '../../interfaces/Recipe';
import './RecipeDetailPage.css';
import { fetchRecipe, useRecipeApiClient } from '../../services/ApiClient';
import { LayoutNav } from '../LayoutNav/LayoutNav';
import { ReviewAdd } from '../ReviewAdd/ReviewAdd';
import { ReviewInterface } from '../../interfaces/ReviewInterface';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { SaltAndPepper } from '../icons/SaltAndPepper';
import { Utensils } from '../icons/Utensils';
import { Servings } from '../icons/Servings';
import { useUserContext } from '../../contexts/UserContext';
import { StarRate } from '../StarRate/StarRate';
import { CloudinaryService, fill } from '../../services/CloudinaryService';

interface Props {}

const RecipeDetailPage: React.FC<Props> = () => {
  const { recipeId } = useParams();
  const { user } = useUserContext();
  const [recipe, setRecipe] = useState<Recipe>();
  const [reviews, setReviews] = useState<ReviewInterface[]>([]);
  const { fetchRecipeReviews } = useRecipeApiClient();
  const userReviewed = reviews.find((review) => review.userId === user?._id);

  const refresh = () => {
    fetchRecipe(recipeId!).then((result) => setRecipe(result))
    fetchRecipeReviews(recipeId!).then((result) => setReviews(result));
  }
  
  useEffect(() => {
    fetchRecipe(recipeId!).then((result) => setRecipe(result));
  }, [recipeId]);
  
  useEffect(() => {
    fetchRecipeReviews(recipeId!).then((result) => setReviews(result))
  }, [recipeId, fetchRecipeReviews])

  if (!recipe) return null;

  const recipeImage = CloudinaryService().image(recipe.image?.publicId);
  recipeImage.resize(fill().width(1000).height(400))

  return (
    <LayoutNav>
      <div className="recipe-details-card">
        <div className='title-details'>
          <div>
            <h2>{recipe.name}</h2>
            <StarRate value={recipe.averageRating} disabled/>
          </div>
          <div className='created-details'>
            <p>By: {recipe.creator?.firstName} {recipe.creator?.lastName}</p>
            <p>{moment(recipe.createdAt).format('MMMM Do, YYYY') }</p>
          </div>
        </div>

        <div className="ingredients-image-container">
          <div className="image-container">
            <AdvancedImage cldImg={recipeImage} />
          </div>
        </div>

        <div className="recipe-detail-page-text-container">
          <div className="ingredients-container">
            <div className='titles-logo'>
              <SaltAndPepper />
              <h3 className="titles">Ingredients</h3>
            </div>
            <ul className="ingredients">
              {recipe.ingredients.map((i) => (
                <li key={i._id}>
                  <p>
                    {i.quantity} {i.name}
                  </p>
                </li>
              ))}
            </ul>
            <div className="serving-container ">
              <Servings />
              <h3 className="titles">Serving <span>{recipe.serving}</span></h3>
            </div>
          </div>

          <div className="preparation-container">
            <div className='titles-logo '>
              <Utensils />
              <h3 className="titles">Preparation</h3>
            </div>
            <ul className="steps">
              {recipe.steps.map((s) => (
                <li key={s._id}>
                  <h4 className="step">{s.name}</h4>
                  <p>{s.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='reviews-area'>
        {
          (!userReviewed && <ReviewAdd onSuccess={refresh}/>)
        }
        <ReviewsList reviews={reviews}/>
      </div>
    </LayoutNav>
  );
};

export { RecipeDetailPage };
