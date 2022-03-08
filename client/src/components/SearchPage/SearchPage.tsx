import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Recipe } from '../../interfaces/Recipe';
import { fetchRecipesByName } from '../../services/ApiClient';
import { LayoutNav } from '../LayoutNav/LayoutNav';
import { RecipesList } from '../RecipesList/RecipesList';
import './SearchPage.css';
import RecipeNotFound from '../../assets/recipe-not-found.svg';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('searchValue');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRecipesByName(searchValue).then((result) => {
      setRecipes(result);
      setIsLoading(false);
    });
  }, [searchValue]);


  {/* TODO : No recipes found should only shows when loading === false */}

  return (
    <LayoutNav>
      {
        !isLoading && recipes.length === 0 ? (
          <div className="no-recipes-found">
            <h4>
              No recipes found for <span className='italic'>" {searchValue} "</span>
            </h4>
            <img src={RecipeNotFound} alt="Recipe not found" />
          </div>
        ) : (
        <>
          {searchValue ? (
            <h4>
              Matching results for <span className='italic'>" {searchValue} "</span>
            </h4>
          ) : (
            <h4>Matching results</h4>
          )}
          <RecipesList recipesList={recipes} />
        </>
      )}
    </LayoutNav>
  );
};

export { SearchPage };
