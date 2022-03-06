import React from 'react';

import { Recipe } from '../../interfaces/Recipe';
import { StarRate } from '../StarRate/StarRate';
import './RecipeBoardCard.css';

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
        <StarRate value={recipe.averageRating} disabled/>
      </div>
    </div>
  );
};

export { RecipeBoardCard };
