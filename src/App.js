import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/NavBarComponents/Home';
import Shop from './Components/NavBarComponents/Shop';
import Wear from './Components/NavBarComponents/Wear';
import Walk from './Components/NavBarComponents/Walk';
import Chains from './Components/NavBarComponents/Chains';
import Reviews from './Components/NavBarComponents/Reviews';

import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />



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
