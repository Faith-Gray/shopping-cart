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
import { commerce } from "./lib/commerce";
import Footer from './Components/Footer/Footer';
import ProductView from './Components/ProductView/ProductView';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import SortBar from './Components/PageComponents/SortBar';





function App() {



  const [cart, setCart] = useState({});
  
  useEffect(() => {
    // fetchProducts();
    fetchCart();
    
  }, [cart]);

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  // const fetchCart = async () => {
    
  //   const response = await commerce.cart.retrieve();
  //   setCart(response);
  // };

  // const refreshCart = async () => {
  //   const newCart = await commerce.cart.refresh();
  //   setCart(newCart);
  // };





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

  // const handleEmptyCart = () => {
  //   commerce.cart.empty().then((resp) => {
  //     setCart(resp.cart);
  //   }).catch((error) => {
  //     console.error('There was an error emptying the cart', error);
  //   });
  // }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

 


  const [ isNavExpanded, setIsNavExpanded ] = useState(false);
  // const [ isSmallerGridSelected, setIsSmallerGridSelected ] = useState(false);
  // const variants = {
  //   open: { opacity: 1, x: 0 },
  //   closed: { opacity: 0, x: "-100%" },
  // }

  return (
    <div className="App">
      <NavBar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded} cart={cart}/>
      <SideNavBar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded}/>
      <Overlay setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded} />


      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/wear" element={<Wear />} />
      <Route path="/walk" element={<Walk />} />
      <Route path="/chains" element={<Chains />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} onUpdateCartQty={handleUpdateCartQty} />}   />



      <Route path="/product-view/:id" element={<ProductView onAddToCart={handleAddToCart} />} />
      <Route path="/checkout" element={<Checkout />} />

      </Routes>





      <Footer/>


    </div>
  );
}

export default App;


// to do
// Refactor nav bar to be its own component and to map out each link to make code more dry. I want one place for the links to be updated/added.
// I need to use square api for the cart and check out 
// Have transitions to have every product load in one by one
// Update the grid buttons to change the size of the product images 
// Add banners around the main dog for a sale or something
// Add content to the reviews page 
// Update the loading screen to show something plus add to all of the pges when the products are loading
// figure out the check out
// Add functionality to the sort, filter, and search