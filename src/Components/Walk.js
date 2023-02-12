import SortBar from "./SortBar/SortBar";
import { commerce } from "../lib/commerce";
import ProductList from "./Products/ProductList";
import { useState, useEffect } from 'react';
import Loading from "./Loading/Loading";



function Walk() {

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
        <header className="pageTitle">
          WALK
        </header>
        <SortBar />
        <ProductList products={products} />
        


      </div>
    );
}
  
export default Walk;