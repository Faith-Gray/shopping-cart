import SortBar from "./SortBar/SortBar";
import { commerce } from "../lib/commerce";
import ProductList from "./Products/ProductList";
import { useState, useEffect } from 'react';


function Wear() {
  const [products, setProducts] = useState([]);


  const fetchProducts = () => {

    commerce.products.list({
      category_slug: ['wear'],
    }).then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
    
  }

  useEffect(() => {
    fetchProducts();
  }, []);
    return (
      <div className="wear">
        <header className="pageTitle">
          WEAR
        </header>
        <SortBar />
        <ProductList products={products} />

      </div>
    );
}
  
export default Wear;