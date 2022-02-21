import { Recipe } from "../interfaces/Recipe";

const baseUrl = 'http://localhost:3000';
const recipesUrl = `${baseUrl}/recipes`;

const fetchRecipes = async(): Promise<Recipe[]> => {
  const response = await fetch(recipesUrl);
  return response.json();
}



export {fetchRecipes}