import SortBar from "./PageComponents/SortBar";
import { commerce } from "./lib/commerce";
import ProductList from './Components/Products/ProductList';


function Walk() {

  const fetchProducts = () => {
    // commerce.products.list().then((products) => {
    //   setProducts(products.data);
    // }).catch((error) => {
    //   console.log('There was an error fetching the products', error)
    // });

    // commerce.categories.retrieve('category', { type: 'slug' })
    // .then((category) => console.log(category.walk));
  
    commerce.products.list({
      category_slug: ['walk'],
    }).then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
    
  }

  useEffect(() => {
    fetchProducts();
  }, []);
    return (
      <div className="walk">
        <header className="pageTitle">
          WALK
        </header>
        <SortBar />
      </div>
    );
}
  
export default Walk;