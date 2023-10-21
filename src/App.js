import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import Homepge from '../src/Pages/Homepage/Homepge.jsx';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepge/>}>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
