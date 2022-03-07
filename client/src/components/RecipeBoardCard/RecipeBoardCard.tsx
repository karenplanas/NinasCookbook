import React from 'react';

import { Recipe } from '../../interfaces/Recipe';
import { StarRate } from '../StarRate/StarRate';
import './RecipeBoardCard.css';
import moment from 'moment'
import { ChefHat } from '../icons/ChefHat';

interface Props  {
  recipe: Recipe;
}

const RecipeBoardCard: React.FC<Props> = ({ recipe }) => {
  const picture = recipe.pictures.find((pic) => pic.type === 'medium') || recipe.pictures[0];
   
  return (
    <div className="recipe-board-card">
      <div className="image-container">
        <img src={picture?.url} alt="plate" />
      </div>
      <div className='name-rate-container'>
        <h4>{recipe.name}</h4>
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

export { RecipeBoardCard };
