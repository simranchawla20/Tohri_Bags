import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepge from '../src/Pages/Homepage/Homepge.jsx';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { OverlayProvider } from './Providers/OverlayContext';
import BestSeller from './Pages/BestSeller/BestSeller';
import React , {useEffect } from 'react';
import CustomisedBags from './Pages/CustomisedBags/CustomisedBags';
import CategoryCommon from './Components/CategoryCommon/CategoryCommon';
import NewArrival from './Pages/NewArrivals/NewArrival';

function App() {
  return (
    <OverlayProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepge/>}></Route>
          <Route path="/bestsellers" element={<BestSeller/>}></Route>
          <Route path="/customised" element={<CustomisedBags/>}></Route>
          <Route path="/tote" element={<CategoryCommon category="Tote"/>}></Route>
          <Route path="/sling" element={<CategoryCommon category="Sling"/>}></Route>
          <Route path="/shoulder" element={<CategoryCommon category="Shoulder"/>}></Route>
          <Route path="/laptop" element={<CategoryCommon category="Laptop"/>}></Route>
          <Route path="/handbags" element={<CategoryCommon category="Hand"/>}></Route>
          <Route path="/wallets" element={<CategoryCommon category="Wallets"/>}></Route>
          <Route path="/vanity" element={<CategoryCommon category="Vanity"/>}></Route>
          <Route path="/formal" element={<CategoryCommon category="Formal"/>}></Route>
          <Route path="/party" element={<CategoryCommon category="Party"/>}></Route>
          <Route path="/holiday" element={<CategoryCommon category="Holiday"/>}></Route>
          <Route path="/new_arrivals" element={<NewArrival/>}></Route>
        </Routes>
      </div>
    </OverlayProvider>
  );
}

export default App;
