import React, { useState } from 'react';

export default function Checkout({ totalPrice, onCheckout }) {
  const [amountPaid, setAmountPaid] = useState('');

  const handlePaymentChange = (event) => {
    setAmountPaid(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amountPaid >= totalPrice) {
      onCheckout(Number(amountPaid));
    } else {
      alert('Insufficient funds');
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Amount Paid:
          <input
            type="text"
            value={amountPaid}
            onChange={handlePaymentChange}
            min="0"
            step="any"
          />
        </label>
        <button type="submit">Pay</button>
      </form>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}
