import SortBar from "./PageComponents/SortBar";
import { commerce } from "../lib/commerce";
import ProductList from "./Products/ProductList";
import { useState, useEffect } from 'react';


function Chains() {
  const [products, setProducts] = useState([]);


  const fetchProducts = () => {

    commerce.products.list({
      category_slug: ['chains'],
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
      <div className="chains">
        <header className="pageTitle">
          CHAINS & TAGS
        </header>
        <SortBar />
        <ProductList products={products} />

      </div>
    );
}
  
export default Chains;