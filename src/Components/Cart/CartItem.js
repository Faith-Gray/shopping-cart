import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

	const handleUpdateCartQty = (lineItemId, quantity) => {
		onUpdateCartQty(lineItemId, quantity);
	}

	const handleRemoveFromCart = () => {
		onRemoveFromCart(item.id);
	}


	return (
		<div className="cart-item">
			<img className="cart-item__image" src={item.image.url} alt={item.name} />
			<div className="cart-item__details">
				<h4 className="cart-item__details-name">{item.name}</h4>
				<div className="cart-item__details-qty">
						<button className='cart-item__less-btn' type="button" onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart()}>-</button>
						<p>{item.quantity}</p>
						<button className='cart-item__add-btn' type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
				</div>
				<div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
				<button
					type="button"
					className="cart-item__remove"
					onClick={handleRemoveFromCart}
				>
					REMOVE
				</button>
			</div>
		</div>
	);
};

export default CartItem;

CartItem.propTypes = {
    item: PropTypes.object,
    handleUpdateCartQty: PropTypes.func,
    onUpdateCartQty: () => {},
    onRemoveFromCart: () => {}
};