import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StoryDetail from './components/StoryDetail';
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<StoryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
