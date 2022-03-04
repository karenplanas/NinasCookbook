import React from 'react';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { RecipeDetailPage } from './components/RecipeDetailPage/RecipeDetailPage';
import { NewRecipe } from './components/NewRecipe/NewRecipe';
import { SignInPage } from './components/SignInPage/SignInPage';
import { SignUpPage } from './components/SignUpPage/SignUpPage';
import { SearchPage } from './components/SearchPage/SearchPage';
import { UserContextProvider } from './contexts/UserContext';
import { CurrentUserRecipes } from './components/CurrentUserRecipes/CurrentUserRecipes';

const App: React.FC = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
            <Route path="/new-recipe" element={<NewRecipe />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/user/recipes" element={<CurrentUserRecipes />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
