import SortBar from "./PageComponents/SortBar";
import { commerce } from "../lib/commerce";
// import ProductsList from './components/ProductsList';
import { useState, useEffect } from 'react';



function Shop() {
  // const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();

  //   setProducts(data);
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // console.log(products);

  return (
    <div className="shop">
      <header className="pageTitle">
        SHOP ALL
      </header>
      <SortBar />
      This is the Shop Page
    </div>
  );
}
  
export default Shop;