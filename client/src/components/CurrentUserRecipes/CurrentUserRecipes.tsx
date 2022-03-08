import React, { useCallback, useEffect, useState } from 'react';
import { useNavigateIfNotAuthenticated } from '../../contexts/UserContext';
import { Recipe } from '../../interfaces/Recipe';
import { useRecipeApiClient } from '../../services/ApiClient';
import { LayoutNav } from '../LayoutNav/LayoutNav';
import { CurrentUserRecipeCard } from '../CurrentUserRecipeCard/CurrentUserRecipeCard';
import './CurrentUserRecipes.css';
import { ChefHat } from '../icons/ChefHat';

const CurrentUserRecipes: React.FC = () => {
  useNavigateIfNotAuthenticated();
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);

  const { deleteRecipe, fetchUserRecipes } = useRecipeApiClient();

  const fetchRecipes = useCallback(() => {
    fetchUserRecipes().then((userRecipes) => setUserRecipes(userRecipes));
  }, [fetchUserRecipes]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const onDelete = async (recipeId: string) => {
    await deleteRecipe(recipeId);
    fetchRecipes();
  };

  return (
    <LayoutNav>
      <div className="CurrentUserRecipes">
        <div className='CurrentUserRecipes-titles-logo'>
          <h3>My Recipes</h3>
          <ChefHat />
        </div>
        {userRecipes?.map((r) => (
          <CurrentUserRecipeCard
            recipe={r}
            key={r._id}
            handleDelete={onDelete}
          />
        ))}
      </div>
    </LayoutNav>
  );
};

export { CurrentUserRecipes };
