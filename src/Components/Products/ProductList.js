import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart }) => {

    return (
        <div className="products" id="products">
            { products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
};

export default ProductList;