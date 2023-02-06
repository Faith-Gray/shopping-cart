// import dog from './greenDog.jpg';
import dog from '../GDnobg(2).png';
import { Link } from 'react-router-dom';
import { commerce } from "../../lib/commerce";
import ProductList from "../Products/ProductList";
import { useState, useEffect } from 'react';
import './Home.css';


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
        <Link to='/shop'>
         <button className='seeMoreBtn'>SEE MORE</button>
        </Link>
      </div>
    );
}
  
export default Home;