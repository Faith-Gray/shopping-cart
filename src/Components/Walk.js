import SortBar from "./SortBar/SortBar";
import { commerce } from "../lib/commerce";
import ProductList from "./Products/ProductList";
import { useState, useEffect } from 'react';
import Loading from "./Loading/Loading";



function Walk({isSmallerGridSelected}) {

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {

    commerce.products.list({
      category_slug: ['walk'],
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
      <div className="walk">

        <ProductList products={products} isSmallerGridSelected={isSmallerGridSelected}/>
        


      </div>
    );
}
  
export default Walk;