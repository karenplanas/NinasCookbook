import React from 'react';
import { Recipe } from '../../interfaces/Recipe';
import './RecipeBoardCard.css';

interface Props {
  recipe: Recipe;
}

const RecipeBoardCard: React.FC<Props> = ({ recipe }) => {
  const picture =
    recipe.pictures.find((pic) => pic.type === 'medium') || recipe.pictures[0];
  return (
    <div className="recipe-board-card">
      <div className="image-container">
        <img src={picture?.url} alt="plate" />
        {/* <div className="hover">
            <h3 >{recipe.name}</h3>
          </div> */}
      </div>
    </div>
  );
};

export { RecipeBoardCard };
