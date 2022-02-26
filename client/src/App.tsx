import React from 'react';
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { RecipeDetailPage } from './components/RecipeDetailPage/RecipeDetailPage';
import { NewRecipe } from './components/NewRecipe/NewRecipe';
import { SignInPage } from './components/SignInPage/SignInPage';
import { SignUpPage } from './components/SignUpPage/SignUpPage';
import { SearchPage } from './components/SearchPage/SearchPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/new-recipe" element={<NewRecipe />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
