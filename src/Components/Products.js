import Product from './Product';

const products = [
    {id: 1, productName:'shoes', productReview: '5 stars', price:'$20'},
    {id: 2, productName:'hat', productReview: '5 stars', price:'$25'}    
];

const Products = () => {
    return (
        <div>
            {products.map((product) => (
                <div>
                    <Product product={product}
                </div>
            ))}
        </div>        
    )

}


export default Products;