import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import './ProductView.css';
import PropTypes from 'prop-types';
import Loading from "../Loading/Loading";
import { stripHtml } from "string-strip-html";

// const createMarkup = (text) => {
//   return { _html: text}
// };


const ProductView = ({ onAddToCart }) => {
    const [product, setProduct] = useState({});
    const [pageLoading, setPageLoading] = useState(true);
    
    const handleAddToCart = () => {
      onAddToCart(product.id, 1);
    }

    

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        console.log(response);
        const { name, price, image, quantity, description, assets, variant_groups } = response;

        const { result } = stripHtml(product.description);


        setProduct({
            id,
            name,
            quantity, 
            description: result,
            src: image?.url,
            price: price.formatted_with_symbol,
            assets,
            variant_groups,
        });
        setPageLoading(false);

    };

    // const productImages = product.assets.filter((asset) => asset.is_image);

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);

    if (pageLoading) return <Loading />;
    return (
      <div className="Product View">


        <div className="pageContainer">
          <div className="productImageContainer">
          <img className="product__image" src={product.src} alt={product.name}/>

          </div>
          <div className="productDescriptionContainer">
            <div className="name">{product.name}</div>
            <div className="price">{product.price}</div>

            {product.variant_groups?.length ? (
              <div> Size </div>
            ) : null }
            
            <div className="quantityBtn">

            </div>
            <button className="addToCartBtn"
            onClick={handleAddToCart}>
              ADD TO CART
            </button>
            
            <div className="description"> {product.description}</div>

          </div>
        </div>
      </div>
    );
}

ProductView.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
  onAddToCart: () => {},
};
  
export default ProductView;