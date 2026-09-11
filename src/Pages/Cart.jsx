import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Cart.css";

function Cart() {
  const navigate = useNavigate();

  // 1. Move cart items into React state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      price: 599,
      quantity: 1,
    },
    {
      id: 2,
      name: "Red Velvet Cake",
      price: 699,
      quantity: 1,
    },
  ]);

  // 2. Handlers to update specific item quantity
  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Removes item if quantity drops to 0
    );
  };

  // 3. Subtotal automatically recalculates whenever cartItems state changes!
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart 🛒</h1>
        <p>Review your delicious order</p>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-card" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <div className="quantity-box">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/payment")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;