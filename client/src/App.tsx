import React from 'react';
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import { NavBar } from './components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='container'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
