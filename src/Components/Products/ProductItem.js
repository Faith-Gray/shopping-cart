import { stripHtml } from "string-strip-html";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const { result } = stripHtml(product.description);

    return (
        <Link to={`/product-view/${product.id}`}>
        <div className="product__card-Container">
            <div className="product__card">
                <img className="product__image" src={product.image?.url} alt={product.name} />
                <div className="product__info">
                    <h4 className="product__name">{product.name}</h4>
                    <p className="product__description">
                        {/* product description stripped of html tags */}
                        {/* {result} */}
                    </p>
                    <div className="product__details">
                        <p className="product__price">
                        {product.price.formatted_with_symbol}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </Link>

    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
};
  

export default ProductItem;