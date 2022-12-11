import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import './ProductView.css';

const createMarkup = (text) => {
  return { _html: text}
};

function ProductView() {
    const [product, setProduct] = useState({});
    
    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const { name, price, image, quantity, description, assets } = response;
        setProduct({
            id,
            name,
            quantity, 
            description: description,
            src: image?.url,
            price: price.formatted_with_symbol,
            assets,
        });
    };

    // const productImages = product.assets.filter((asset) => asset.is_image);

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);

    return (
      <div className="Product View">

        <header className="pageTitle">
          WALK
        </header>
        <div className="pageContainer">
          <div className="productImageContainer">
          <img className="product__image" src={product.src} alt={product.name}/>
          {product.image}
          {product.src}
          <div>what</div>
          </div>
          <div className="productDescriptionContainer">
            {product.name}
            {product.price}
            {product.description}


          </div>
        </div>
      </div>
    );
}
  
export default ProductView;