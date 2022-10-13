

const Product = ({ product }) => {
    return (
        <div className="productCard">
            {/* make image and the product name a link to the product page */}
            <div className="productImage1"></div>
            <div className="productImage2"></div>
            <div className="productName"></div>
            <div className="productReview"></div>
            <div className="productPrice"></div>
        </div>
    )
}

export default Product;