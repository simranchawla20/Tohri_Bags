import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepge from '../src/Pages/Homepage/Homepge.jsx';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { OverlayProvider } from './Providers/OverlayContext';

function App() {
  return (
    <OverlayProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepge/>}></Route>
        </Routes>
      </div>
    </OverlayProvider>
  );
}

export default App;
