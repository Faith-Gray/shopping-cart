import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>


      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />

      </Routes>
    </div>
  );
}

export default App;
