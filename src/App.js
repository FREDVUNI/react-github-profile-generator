import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Repos from './components/Repos'
import Search from './components/Search'
import { SearchProvider } from './context/SearchContext'

function App() {
  return (
    <SearchProvider>
      <div className="app">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Search/>}/>                  
          <Route path="/repos" element={<Repos/>}/>                  
        </Routes>
      </Router>
      </div>
    </SearchProvider>
  );
}

export default App;
