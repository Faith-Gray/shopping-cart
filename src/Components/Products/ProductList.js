import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import Loading from '../Loading/Loading';

const ProductList = ({ products, isSmallerGridSelected }) => {
    if(!products.length) return <Loading/>;

    return (
        <div className="products" id="products">
            { products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    isSmallerGridSelected={isSmallerGridSelected} 
                />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
};

export default ProductList;