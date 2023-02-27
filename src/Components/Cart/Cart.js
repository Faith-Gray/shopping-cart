import PropTypes from 'prop-types';
import CartItem from './CartItem';
import './Cart.css';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

// Cart isn't updating until the cart is recreated on every refresh


const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  };

  const renderEmptyMessage = () => {
      if (cart.total_unique_items > 0) {
        return;
      } else {
  
      return (
        <p className="cart__none">
          You have no items in your shopping cart, start adding some!
        </p>
      )
    }
  };

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
        <CartItem
          item={lineItem}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
          key={lineItem.id}
          className="cart__inner"
        />
    ))
  )

  const renderTotal = () => (
      <div className="cart__total">
          <p className="cart__total-title">Subtotal:</p>
          <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
      </div>
  )

  if(!cart?.line_items) return <div className='loadingDiv'>

    <Loading/>;

  </div>
  

  
  return (
    
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      { renderEmptyMessage() }
      <div className='cart__render-items'>
       { renderItems() }
      </div>
      { renderTotal() }
      <div className="cart__footer">
        <button className="cart__btn-empty" onClick={handleEmptyCart}>EMPTY CART</button>
        <Link
          className="cart__btn-checkout"
          to='/checkout'
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onRemoveFromCart: () => {},
  onUpdateCartQty: () => {},
  onEmptyCart: () => {},
};