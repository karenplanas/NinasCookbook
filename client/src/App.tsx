import React from 'react';
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { RecipeDetailPage } from './components/RecipeDetailPage/RecipeDetailPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
