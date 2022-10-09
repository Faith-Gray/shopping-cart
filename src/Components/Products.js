

const Products = () => {
    <main>
        {products.map((product) => (
            <div>
                key={product.id} 
                <Product product={product}
            </div>
        ))}
    </main>
}


export default Products;