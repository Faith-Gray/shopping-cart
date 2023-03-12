import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Shop from './Components/Shop';
import Wear from './Components/Wear';
import Walk from './Components/Walk';
import Chains from './Components/Chains';
import Reviews from './Components/Reviews/Reviews';
import NavBar from './Components/NavBar';
import SideNavBar from './Components/SideNavBar';
import { useState, useEffect } from 'react';
import Overlay from './Components/Overlay';
import { commerce } from "./lib/commerce";
import Footer from './Components/Footer/Footer';
import ProductView from './Pages/ProductView/ProductView';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Layout from './Layout';
import SortModal from './Components/SortBar/SortModal';


function App() {
  const [cart, setCart] = useState({});
  const [ isSmallerGridSelected, setIsSmallerGridSelected ] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  
  useEffect(() => {
    fetchCart();
  }, [cart]);

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }


  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
    console.log(cart);
  };

  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  };

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const [ isNavExpanded, setIsNavExpanded ] = useState(false);


  return (
    <div className="App">
      <NavBar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded} 

      />
      <SideNavBar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded}/>
      <SortModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <Overlay setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded} />


      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} onUpdateCartQty={handleUpdateCartQty} />}   />
        <Route path="/product-view/:id" element={<ProductView onAddToCart={handleAddToCart} />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route element={<Layout isSmallerGridSelected={isSmallerGridSelected} setIsSmallerGridSelected={setIsSmallerGridSelected}/> }>
          <Route path="/shop" element={<Shop isSmallerGridSelected={isSmallerGridSelected} />} />
          <Route path="/wear" element={<Wear isSmallerGridSelected={isSmallerGridSelected}/>} />
          <Route path="/walk" element={<Walk isSmallerGridSelected={isSmallerGridSelected}/>} />
          <Route path="/chains" element={<Chains isSmallerGridSelected={isSmallerGridSelected}/>} />
        </Route>
      </Routes>

      {/* <SortModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}



      <Footer/>


    </div>
  );
}

export default App;
