import React from "react";
import './body.css';


const BakeryBody = () => {
  return (
    <div className="hero-container">
      

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-left">
          <span className="tag">Freshly Baked Every Day 🍰</span>

          <h1>
            Delicious Cakes <br />
            Crafted With <span>Love</span>
          </h1>

          <p>
            Explore our premium cake collection, discover nearby bakeries,
            place your order, and pay securely—all in one place.
          </p>

          <div className="hero-buttons">
            <button onClick={() => window.location.href = '/menu'} className="primary-btn">
              View Menu 
            </button>

            <button className="secondary-btn" onClick={() => window.location.href = '/nearby'}  >
              Find Nearby Bakery
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
            alt="Cake"
          />
        </div>

      </section>

      {/* Features Section */}
      <section className="features">

        <div className="card" onClick={() => window.location.href = '/menu'}>
          <h3>🍓 Cake Menu</h3>
          <p>
            Chocolate, Red Velvet, Vanilla, Fruit Cakes,
            Custom Birthday Cakes and more.
          </p>
        </div>

        <div className="card" onClick={() => window.location.href = '/nearby'}>
          <h3>📍 Nearby Bakeries</h3>
          <p>
            Find trusted bakeries closest to your location
            with directions and ratings.
          </p>
        </div>

        <div className="card" onClick={() => window.location.href = '/payment'}>
          <h3>💳 Secure Payment</h3>
          <p>
            Pay online using UPI, Debit Card,
            Credit Card, or Net Banking.
          </p>
        </div>

      </section>

      {/* Contact Section */}
      <section className="contact-card">

        <h2>Need Help Ordering?</h2>

        <p>
          Call us anytime for custom cake orders and delivery support.
        </p>

        <h3>📞 +91 98765 43210</h3>

        <button className="payment-btn">
          Proceed to Payment
        </button>

      </section>

    </div>
  );
};

export default BakeryBody;