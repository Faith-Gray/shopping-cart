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
import { useState, useEffect } from 'react';
import Overlay from './Components/Overlay';
import SortBar from './Components/PageComponents/SortBar';
import { commerce } from "./lib/commerce";
import { Product } from './Components/Products/Product';




function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);




  const [ isNavExpanded, setIsNavExpanded ] = useState(false);
  // const [ isSmallerGridSelected, setIsSmallerGridSelected ] = useState(false);
  // const variants = {
  //   open: { opacity: 1, x: 0 },
  //   closed: { opacity: 0, x: "-100%" },
  // }

  return (
    <div className="App">
      <NavBar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded}/>
      <SideNavBar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded}/>
      <Overlay setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded} />
      <Product products={products} />


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


// to do
// Refactor nav bar to be its own component and to map out each link to make code more dry. I want one place for the links to be updated/added.
// I need to fix the mobile navbar slide out
// I need the mobile nav bar to close when I click on a link 
// I need to update the home page dog picture 
// then I need to learn e commerce library 
// I need to implement testing wtih something. I think maybe with the ecommerce site with fake data 
// or during the shopping cart calculation 
// I need to use square api for the cart and check out 
// I need to use framer to slide across the product pictures and to have the products load onto the page.App

//psuedocode
//I need a component for the productsData, one for the productPage, and one for the product list that lists out the products


//state for the grid buttons
//put the state in the app to control what color the grid buttons are and how the products align on the page