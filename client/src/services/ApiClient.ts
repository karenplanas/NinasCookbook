import { Recipe } from "../interfaces/Recipe";
import { User } from "../interfaces/User";

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

const fetchRecipesByName = async(searchValue: string | null): Promise<Recipe[]> => {
  const response = await fetch(`${recipesUrl}?searchValue=${searchValue}`);
  return response.json();
}

const createUser = async(user: User): Promise<User> => {
  const options = {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(user)
  }
  const response = await fetch(`${baseUrl}/register`, options);
  return response.json();
}

const loginUser = async(user: User): Promise<User> => {
  const options = {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(user)
  }
  const response = await fetch(`${baseUrl}/login`, options);
  return response.json();
}

export {fetchRecipes, fetchRecipe, fetchRecipesByName, createUser, loginUser}