import SortBar from "./SortBar/SortBar";
import { commerce } from "../lib/commerce";
import ProductList from "./Products/ProductList";
import { useState, useEffect } from 'react';



function Shop({isSmallerGridSelected}) {
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
      <ProductList products={products} isSmallerGridSelected={isSmallerGridSelected}/>

    </div>
  );
}
  
export default Shop;