import React from 'react';

export default function Receipt({ cart, totalPrice, paidAmount, change, onReset }) {
  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p><strong>Total: </strong>${totalPrice}</p>
      <p><strong>Amount Paid: </strong>${paidAmount}</p>
      <p><strong>Change: </strong>${change}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
