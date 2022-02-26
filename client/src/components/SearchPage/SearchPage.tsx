import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Recipe } from '../../interfaces/Recipe'
import { fetchRecipesByName } from '../../services/ApiClient'
import { LayoutNav } from '../LayoutNav/LayoutNav'
import { RecipesList } from '../RecipesList/RecipesList'
import './SearchPage.css'
import RecipeNotFound from '../../assets/recipe-not-found.svg'


const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name')
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  
  useEffect( () => {
    fetchRecipesByName(name)
      .then(result => setRecipes(result))
  }, [name])
  
  return (
    <LayoutNav>
      { recipes.length === 0 ? 
        <div className='no-recipes-found'>
          <h4>No recipes found for <span>" {name} "</span></h4>
          <img src={RecipeNotFound} alt="Recipe not found"/> 
        </div> :
          <>
            {name ? <h4>Matching results for <span>" {name} "</span></h4> : <h4>Matching results</h4> }
            <RecipesList recipesList={recipes}/>
          </>
      }
    </LayoutNav>
  )
}

export {SearchPage}
