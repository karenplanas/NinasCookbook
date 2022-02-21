import { Recipe } from "../interfaces/Recipe";

const baseUrl = 'http://localhost:3000';
const recipesUrl = `${baseUrl}/recipes`;

const fetchRecipes = async(): Promise<Recipe[]> => {
  const response = await fetch(recipesUrl);
  return response.json();
}

const fetchRecipe = async (id: string | undefined) => {
  const response = await fetch(`${recipesUrl}/${id}`);
  return response.json();
}

export {fetchRecipes, fetchRecipe}