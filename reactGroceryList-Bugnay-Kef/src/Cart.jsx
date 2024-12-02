import React from 'react';

export default function Cart({ cart, totalPrice}) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

