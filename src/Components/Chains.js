import SortBar from "./SortBar/SortBar";
import { commerce } from "../lib/commerce";
import ProductList from "./Products/ProductList";
import { useState, useEffect } from 'react';


function Chains({isSmallerGridSelected}) {
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

        <ProductList products={products} isSmallerGridSelected={isSmallerGridSelected}/>

      </div>
    );
}
  
export default Chains;