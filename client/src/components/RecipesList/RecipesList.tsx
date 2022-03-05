import React from 'react';
import { Recipe } from '../../interfaces/Recipe';
import { RecipeBoardCard } from '../RecipeBoardCard/RecipeBoardCard';
import './RecipesList.css';
import { Link } from 'react-router-dom';

interface Props {
  listTitle?: string;
  recipesList: Recipe[];
}

const RecipesList: React.FC<Props> = ({ listTitle, recipesList }) => {
  const recipes = recipesList;
  return (
    <div className="recipes-list">
      <h2>{listTitle}</h2>
      <ul className="list">
        {' '}
        {recipes.map((r) => (
          <li key={r._id}>
            <Link to={`/recipes/${r._id}`}>
              <RecipeBoardCard recipe={r} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { RecipesList };
