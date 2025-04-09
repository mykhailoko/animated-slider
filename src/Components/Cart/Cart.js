import React from 'react';
import './Cart.css';

export default function Cart({ cartItems, isCartOpen }) {
  const aggregatedItems = cartItems.reduce((acc, item) => {
    if (acc[item.name]) {
      acc[item.name].quantity += 1;
    } else {
      acc[item.name] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const items = Object.values(aggregatedItems);

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    isCartOpen && (
      <div className='cartTab'>
        <h2>Shopping Cart</h2>
        {items.length === 0 ? (
          <p></p>
        ) : (
          <>
            <ul>
              {items.map((item, index) => {

                const totalPrice = item.price * item.quantity;

                return (
                  <li key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <span>{item.name}</span><span>${totalPrice.toFixed(2)}</span><span>{item.quantity}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="cart-total">
              <span>Total Amount: </span><span>${totalAmount.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    )
  );
}
