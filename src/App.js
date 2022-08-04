import './App.css';
import React, {lazy, Suspense} from 'react';
// import Home from './MyComponents/pages/Home'
// import Work from './MyComponents/pages/MyWork'
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./MyComponents/pages/Home"))
const Work = lazy(() => import("./MyComponents/pages/MyWork"))







function App() {

  return (
    <>
       <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
