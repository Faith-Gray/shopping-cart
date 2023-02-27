import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import './ProductView.css';
import PropTypes from 'prop-types';
import Loading from "../../Components/Loading/Loading";
import { stripHtml } from "string-strip-html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle} from '@fortawesome/free-solid-svg-icons';
//Hallow circle icon. Might use later
// import { faCircle} from '@fortawesome/free-regular-svg-icons';





const ProductView = ({ onAddToCart }) => {
    const [product, setProduct] = useState({});
    const [pageLoading, setPageLoading] = useState(true);
    const [productImageNumber, setProductImageNumber] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [touchPosition, setTouchPosition] = useState(null);
    
    const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX;
      setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
      const touchDown = touchPosition
  
      if(touchDown === null) {
        return
      }
  
      const currentTouch = e.touches[0].clientX
      const diff = touchDown - currentTouch
  
      if (diff > 5) {
        // next()
        console.log('next s');
      }
  
      if (diff < -5) {
        // prev()
        console.log('prev s');
      }
  
      setTouchPosition(null)
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 900;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);
    
    const handleAddToCart = () => {
      onAddToCart(product.id, 1);
    }

    

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        console.log(response);
        const { name, price, image, quantity, description, assets, variant_groups } = response;

        const { result } = stripHtml(description);

        // const [productPreviewImage, setProductPreviewImage] = useState(image?.url);

        setProduct({
            id,
            name,
            quantity, 
            description: result,
            // description: description,
            src: image?.url,
            price: price.formatted_with_symbol,
            assets: assets,
            variant_groups,
        });
        setPageLoading(false);

    };

    // const productImages = product.assets.filter((asset) => asset.is_image);

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);

    const handleClick = (event, key) => {
      // console.log(event.target);
      // console.log('key index: ', key)
      setProductImageNumber(key);
    };


    if (pageLoading) return <div className="loadingDiv">
        <Loading />
    </div>


    return (
      <div className="Product View">


        <div className="pageContainer">
          <div className="productImageContainer">
          <img className="product__image" 
            src={product.assets[productImageNumber].url}
            alt={product.name}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          />

            <div className="productImageCarousel"> 
              
              {isMobile ? (product.assets.map((product, key) => 
              <FontAwesomeIcon className="circles" icon={faCircle} alt ='product images' key={product.url} onClick={event => handleClick(event, key)}/> )) 
              : 
              (product.assets.map((product, key) => <img src={product.url} alt ='product images' key={product.url} onClick={event => handleClick(event, key)}/> ))
              }

            </div>
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