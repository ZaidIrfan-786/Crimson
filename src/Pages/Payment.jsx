
import { useState } from "react";
import "./CSS/Payment.css";

function Payment() {
  const [method, setMethod] = useState("upi");

  return (
    <div className="payment-page">

      <div className="checkout-header">
        <h1>Secure Checkout 🔒</h1>
        <p>Freshly baked happiness delivered to your doorstep</p>
      </div>

      <div className="payment-container">

        {/* Order Summary */}
        <div className="order-summary">

          <h2>Order Summary</h2>

          <div className="item">
            <span>Chocolate Truffle Cake × 1</span>
            <span>₹599</span>
          </div>

          <div className="item">
            <span>Red Velvet Cake × 1</span>
            <span>₹699</span>
          </div>

          <div className="item">
            <span>Delivery Fee</span>
            <span>₹50</span>
          </div>

          <hr />

          <div className="total">
            <span>Total</span>
            <span>₹1348</span>
          </div>

          <div className="delivery-box">
            <h4>📍 Delivery Address</h4>
            <p>123 Bakery Street, Your City</p>

            <h4>⏰ Delivery Time</h4>
            <p>30 - 45 Minutes</p>
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment-card">

          <h2>Choose Payment Method</h2>

          <div className="payment-methods">

            <button
              className={method === "upi" ? "method active" : "method"}
              onClick={() => setMethod("upi")}
            >
              📱 UPI
            </button>

            <button
              className={method === "card" ? "method active" : "method"}
              onClick={() => setMethod("card")}
            >
              💳 Card
            </button>

            <button
              className={method === "cod" ? "method active" : "method"}
              onClick={() => setMethod("cod")}
            >
              🚚 COD
            </button>

          </div>

          {/* UPI */}
          {method === "upi" && (
            <div>

              <div className="qr-box">
                QR CODE
              </div>

              <p className="scan-text">
                Scan using any UPI app
              </p>

              <div className="upi-apps">
                <div className="upi-app">📱 PhonePe</div>
                <div className="upi-app">🟢 Google Pay</div>
                <div className="upi-app">💙 Paytm</div>
                <div className="upi-app">🏦 BHIM</div>
              </div>

              <input
                type="text"
                placeholder="Enter UPI ID"
              />

            </div>
          )}

          {/* Card */}
          {method === "card" && (
            <div className="card-form">

              <input
                type="text"
                placeholder="Card Holder Name"
              />

              <input
                type="text"
                placeholder="Card Number"
              />

              <div className="row">

                <input
                  type="text"
                  placeholder="MM/YY"
                />

                <input
                  type="password"
                  placeholder="CVV"
                />

              </div>

              <div className="card-support">
                Visa • Mastercard • RuPay
              </div>

            </div>
          )}

          {/* COD */}
          {method === "cod" && (
            <div className="cod-box">

              <h3>🚚 Cash on Delivery</h3>

              <p>
                Pay when your order arrives at your doorstep.
              </p>

              <p>
                Additional charge: ₹30
              </p>

              <p>
                ✔ Available in your area
              </p>

            </div>
          )}

          <button className="checkout-btn">
            Complete Payment
          </button>

          <p className="secure">
            🔒 SSL Encrypted Secure Checkout
          </p>

        </div>

      </div>

    </div>
  );
}

export default Payment;
