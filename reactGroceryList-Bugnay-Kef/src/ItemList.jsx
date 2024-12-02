
import React from 'react';

export default function ItemList({ items, addToCart }) {
  return (
    <div className="item-list">
      <h2>Available Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - ${item.price}
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

