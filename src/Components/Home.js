import dog from './greenDog.jpg';
import { commerce } from "../lib/commerce";
import ProductList from "./Products/ProductList";
import { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);


  
  const fetchProducts = () => {
    commerce.products.list({limit: 8,}).then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
    
  }

  useEffect(() => {
    fetchProducts();
  }, []);

    return (
      <div className="home">
        <div className='greenOutline'>
          <img src={dog} alt="Green Dog" className='greenDog'/>
        </div>
        <header className='homeHeader'>
          Customer Favorites
        </header>
        <ProductList products={products} />

      </div>
    );
}
  
export default Home;