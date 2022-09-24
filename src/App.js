import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Wear from './Components/Wear';
import Walk from './Components/Walk';
import Chains from './Components/Chains';
import Reviews from './Components/Reviews';
import NavBar from './Components/NavBar';
import SideNavBar from './Components/SideNavBar';
import { useState } from 'react';
import Overlay from './Components/Overlay';


function App() {
  const [ isNavExpanded, setIsNavExpanded ] = useState(true);


  return (
    <div className="App">
      <NavBar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded}/>
      <SideNavBar />
      <Overlay isNavExpanded={isNavExpanded} />



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
