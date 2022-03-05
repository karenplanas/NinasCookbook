import React from 'react';

import './CurrentUserRecipeCard.css';
import { Recipe } from '../../interfaces/Recipe';
import { Link } from 'react-router-dom';

interface Props {
  recipe: Recipe;
  handleDelete: (id: string) => void;
}

const CurrentUserRecipeCard: React.FC<Props> = ({ recipe, handleDelete }) => {
  return (
    <div className="UserRecipeCard">
      <div className="UserRecipeCard-image-container">Image</div>
      <div className="user-recipe-details">
        <Link to={`/recipes/${recipe._id}`}>
          <h4>{recipe.name}</h4>
        </Link>
        <p>{recipe.description}</p>
        <div className="userRecipeCard-options">
          <Link to={`/recipes/${recipe._id}`}>
            <p>More...</p>
          </Link>
          <div>
            <p>Edit</p>
          </div>
          <div onClick={() => handleDelete(recipe._id)}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CurrentUserRecipeCard };
