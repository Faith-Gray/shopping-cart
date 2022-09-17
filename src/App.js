import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Wear from './Components/Wear';
import Walk from './Components/Walk';
import Chains from './Components/Chains';
import Reviews from './Components/Reviews';

function App() {
  return (
    <div className="App">
      <nav className='navigationBar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop All</Link>
          </li>
          <li>
            <Link to="/wear">Wear</Link>
          </li>
          <li>
            <Link to="/walk">Walk</Link>
          </li>
          <li>
            <Link to="/chains">Chains</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>


      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/wear" element={<Wear />} />
      <Route path="/walk" element={<Walk />} />
      <Route path="/chains" element={<Chains />} />
      <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
