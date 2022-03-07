import React from 'react';
import {AdvancedImage} from '@cloudinary/react';
import { Link } from 'react-router-dom';

import { Recipe } from '../../interfaces/Recipe';
import { CloudinaryService, fill } from '../../services/CloudinaryService';
import { BreakFast } from '../icons/BreakFast';
import './CurrentUserRecipeCard.css';

interface Props {
  recipe: Recipe;
  handleDelete: (id: string) => void;
}

const CurrentUserRecipeCard: React.FC<Props> = ({ recipe, handleDelete }) => {
  const recipeImage = CloudinaryService().image(recipe.image?.publicId);
  recipeImage.resize(fill().width(250).height(150))

  return (
    <div className="UserRecipeCard">
      <div className="UserRecipeCard-image-container"> 
      <Link to={`/recipes/${recipe._id}`}>
        <AdvancedImage cldImg={recipeImage} />
      </Link> 
      </div>
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
