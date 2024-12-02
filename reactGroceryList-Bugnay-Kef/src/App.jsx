import React, { useState } from 'react';
import ItemList from './ItemList.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';
import Receipt from './Receipt.jsx';


function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const fruits = [
    { id: 1, name: 'Grapes', price: 1.00 },
    { id: 2, name: 'Oranges', price: 1.01 },
    { id: 3, name: 'Kiwis', price: 1.02 },
    { id: 4, name: 'Bananas', price: 1.03 },
    { id: 5, name: 'Cucumbers', price: 1.04 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, item];
      setTotalPrice(newCart.reduce((total, item) => total + item.price, 0));
      return newCart;
    });
  };

  const handleCheckout = (amountPaid) => {
    setPaidAmount(amountPaid);
    setIsCheckedOut(true);
  };

  const handleReset = () => {
    setCart([]);
    setTotalPrice(0);
    setPaidAmount(0);
    setIsCheckedOut(false);
  };

  const change = paidAmount - totalPrice;

  return (
    <>
      <div className="app">
        
        <ItemList items={fruits} addToCart={addToCart} />
        
        {!isCheckedOut && <Cart cart={cart} totalPrice={totalPrice} />}
        
        {!isCheckedOut && (
          <Checkout totalPrice={totalPrice} onCheckout={handleCheckout} />
        )}
        
        {isCheckedOut && (
          <Receipt
            cart={cart}
            totalPrice={totalPrice}
            paidAmount={paidAmount}
            change={change}
            onReset={handleReset}
          />
        )}
      </div>

    </>
  );
}

export default App;
