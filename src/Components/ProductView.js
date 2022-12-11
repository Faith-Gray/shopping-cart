import { commerce } from "../lib/commerce";
import { useState, useEffect } from "react";

// const createMarkup = (text) => {
//     return { _html: text}
// };

function ProductView() {
    const [product, setProduct] = useState({});

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const { name, price, pic, quantity, description } = response;
        setProduct({
            id,
            name,
            quantity, 
            description,
            pic,
            price: price.formatted_with_symbol,
        });
    };

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);

    return (
      <div className="Product View">

        <header className="pageTitle">
          WALK
        </header>
        {product.name}
      </div>
    );
}
  
export default ProductView;