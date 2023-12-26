import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepge from '../src/Pages/Homepage/Homepge.jsx';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { OverlayProvider } from './Providers/OverlayContext';
import BestSeller from './Pages/BestSeller/BestSeller';
import React , {useEffect } from 'react';
import CustomisedBags from './Pages/CustomisedBags/CustomisedBags';

function App() {
  return (
    <OverlayProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepge/>}></Route>
          <Route path="/bestsellers" element={<BestSeller/>}></Route>
          <Route path="/customised" element={<CustomisedBags/>}></Route>
        </Routes>
      </div>
    </OverlayProvider>
  );
}

export default App;
