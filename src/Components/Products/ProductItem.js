import { stripHtml } from "string-strip-html";
import PropTypes from 'prop-types';


const ProductItem = ({ products }) => {
    const { result } = stripHtml(products.description);

    return (
        <div className="product__card">
        <img className="product__image" src={products.image?.url} alt={products.name} />
        <div className="product__info">
          <h4 className="product__name">{products.name}</h4>
          <p className="product__description">
            {/* product description stripped of html tags */}
            {result}
          </p>
          <div className="product__details">
            <p className="product__price">
              {products.price.formatted_with_symbol}
            </p>
          </div>
        </div>
      </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
};
  

export default ProductItem;