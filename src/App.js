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
import Footer from './Components/Footer';
import ProductView from './Components/ProductView/ProductView';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';





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
      <NavBar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded}/>
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
//I love this
