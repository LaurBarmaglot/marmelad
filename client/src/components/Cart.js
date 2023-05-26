import React from 'react';

const Cart = (props) => {
  const { cartItems, removeFromCart } = props;

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
