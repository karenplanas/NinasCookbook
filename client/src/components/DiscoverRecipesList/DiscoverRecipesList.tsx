import React, { useEffect, useState } from "react";
import { Recipe } from "../../interfaces/Recipe";
import { fetchRecipes } from "../../services/ApiClient";
import { RecipesList } from "../RecipesList/RecipesList";

const DiscoverRecipesList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect( () => {
    fetchRecipes()
      .then((recipes) => setRecipes(recipes));
  }, [])

  return (
    <RecipesList listTitle="Discover" recipesList={recipes}/>
  )
}

export {DiscoverRecipesList}