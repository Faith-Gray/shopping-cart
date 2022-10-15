

const Product = ({ products }) => {
    return (
        <div className="productCard">
            {/* make image and the product name a link to the product page */}
            <div className="productImage1">{products.price}</div>
            <div className="productImage2">{products.name}</div>
            <div className="productName"></div>
            <div className="productReview"></div>
            <div className="productPrice"></div>
        </div>
    )
}

export default Product;