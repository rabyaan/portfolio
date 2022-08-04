import './App.css';
import React from 'react';
import Home from './MyComponents/pages/Home'
import Work from './MyComponents/pages/MyWork'
import { Routes, Route } from "react-router-dom";








function App() {

  return (
    <>
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
