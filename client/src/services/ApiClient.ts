import { useCallback } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { Credentials } from '../interfaces/Credentials';
import { Recipe } from '../interfaces/Recipe';
import { ReviewInterface } from '../interfaces/ReviewInterface';
import { User } from '../interfaces/User';

const baseUrl = 'http://localhost:3000';
const recipesPath = '/recipes';
const loginPath = '/login';
const registerPath = '/register';
const userRecipesPath = '/user/recipes';

interface PerformRequestParameters {
  method?: string;
  path: string;
  body?: unknown;
  token?: string;
}

const performRequest = async <T>({
  method,
  path,
  body,
  token
}: PerformRequestParameters): Promise<T> => {
  const options = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    },
    body: body ? JSON.stringify(body) : undefined
  };
  const response = await fetch(`${baseUrl}${path}`, options);
  return response.json() as unknown as T;
};

// ***** Recipes requests *****

const fetchRecipe = (id: string | undefined): Promise<Recipe> => {
  return performRequest<Recipe>({
    method: 'GET',
    path: `${recipesPath}/${id}`
  });
};

const fetchRecipes = (): Promise<Recipe[]> => {
  return performRequest({ 
    method: 'GET', 
    path: `${recipesPath}` });
};

const fetchRecipesByName = (searchValue: string | null): Promise<Recipe[]> => {
  return performRequest({
    method: 'GET',
    path: `${recipesPath}?searchValue=${searchValue}`
  });
};

const useRecipeApiClient = () => {
  const { user } = useUserContext();

  const createRecipe = useCallback(
    (recipe: Recipe) => {
      return performRequest({
        method: 'POST',
        path: `${recipesPath}`,
        body: recipe,
        token: user?.accessToken
      });
    },
    [user]
  );

  const deleteRecipe = useCallback(
    (recipeId: string) => {
      return performRequest({
        method: 'DELETE',
        path: `${userRecipesPath}/${recipeId}`,
        token: user?.accessToken
      });
    },
    [user]
  );

  const fetchUserRecipes = useCallback((): Promise<Recipe[]> => {
    return performRequest({
      method: 'GET',
      path: userRecipesPath,
      token: user?.accessToken
    });
  }, [user]);

  // ***** Reviews requests *****

  const fetchRecipeReviews = (recipeId: string): Promise<ReviewInterface[]> => {
    return performRequest({
      method: 'GET',
      path: `${recipesPath}/${recipeId}/reviews`,
    })
  }

  const createReview = (review : ReviewInterface): Promise<ReviewInterface> => {
    return performRequest({
      method: 'POST',
      path: `${recipesPath}/${review.recipeId}/reviews`,
      body: review,
      token: user?.accessToken
    })
  }

  return {
    createRecipe,
    fetchUserRecipes,
    deleteRecipe, 
    createReview, 
    fetchRecipeReviews
  };
};

// ***** User requests *****

const createUser = (user: User): Promise<User> => {
  return performRequest({ 
    method: 'POST', 
    path: registerPath, 
    body: user });
};

const loginUser = (credentials: Credentials): Promise<User> => {
  return performRequest({ 
    method: 'POST', 
    path: loginPath, 
    body: credentials });
};

const fetchUserRecipes = (user: User | undefined): Promise<Recipe[]> => {
  return performRequest({
    method: 'GET',
    path: userRecipesPath,
    token: user?.accessToken
  });
};

export {
  fetchRecipes,
  fetchRecipe,
  fetchRecipesByName,
  createUser,
  loginUser,
  useRecipeApiClient,
  fetchUserRecipes,
};
