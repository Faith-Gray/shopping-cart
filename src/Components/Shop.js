import SortBar from "./PageComponents/SortBar";
import { commerce } from "../lib/commerce";
import ProductList from "./Products/ProductList";
import { useState, useEffect } from 'react';



function Shop() {
  const [products, setProducts] = useState([]);


  
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
    
  }

  useEffect(() => {
    fetchProducts();
  }, []);

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
      <ProductList products={products} />

    </div>
  );
}
  
export default Shop;