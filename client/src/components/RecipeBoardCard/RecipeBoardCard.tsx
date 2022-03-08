import React from 'react';
import moment from 'moment'

import { Recipe } from '../../interfaces/Recipe';
import { StarRate } from '../StarRate/StarRate';
import './RecipeBoardCard.css';
import { ChefHat } from '../icons/ChefHat';
import { CloudinaryService, fill } from '../../services/CloudinaryService';
import { AdvancedImage } from '@cloudinary/react';
import { Link } from 'react-router-dom';

interface Props  {
  recipe: Recipe;
}

const RecipeBoardCard: React.FC<Props> = ({ recipe }) => {
  const recipeImage = CloudinaryService().image(recipe.image?.publicId);
  recipeImage.resize(fill().width(600).height(600))
  
    return (
    <div className="recipe-board-card">
      <div className="image-container">
        <Link to={`/recipes/${recipe._id}`}>
          <AdvancedImage cldImg={recipeImage} />
        </Link>
      </div>
      <div className='name-rate-container'>
        <Link to={`/recipes/${recipe._id}`}>
          <h4>{recipe.name}</h4>
        </Link>
        <div className='creator-hat'>
          <p>By {recipe.creator?.firstName} {recipe.creator?.lastName}</p>
          <ChefHat />
        </div>
        <p>{moment(recipe.createdAt).format('MMM Do, YYYY') }</p>
        <StarRate value={recipe.averageRating} disabled/>
      </div>
    </div>
  );
};

export { RecipeBoardCard }