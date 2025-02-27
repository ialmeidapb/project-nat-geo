import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StoryDetail from './components/CardDetail';
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<StoryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
