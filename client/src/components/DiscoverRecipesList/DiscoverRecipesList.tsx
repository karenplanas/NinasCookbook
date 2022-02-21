import React, { useEffect, useState } from "react";
import { Recipe } from "../../interfaces/Recipe";
// import { useQuery } from 'react-query'
import { fetchRecipes } from "../../services/ApiClient";
import { RecipesList } from "../RecipesList/RecipesList";

const DiscoverRecipesList: React.FC = () => {
  // const { data: recipes} = useQuery('fetchRecipes', fetchRecipes);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect( () => {
    fetchRecipes()
      .then((recipes) => setRecipes(recipes));
  }, [])

  return (
    <div>
      <RecipesList listTitle="Discover" recipesList={recipes}/>
    </div>
  )
}

export {DiscoverRecipesList}