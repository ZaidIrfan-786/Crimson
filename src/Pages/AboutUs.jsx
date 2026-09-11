import "./CSS/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About Sweet Crumbs Bakery</h1><br />
        <p>
          Crafting unforgettable cakes and sweet memories since day one.
        </p>
      </section>

      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Sweet Crumbs Bakery was founded with a simple mission:
            to bring freshly baked happiness to every celebration.
            From birthdays and anniversaries to everyday cravings,
            our cakes are made using premium ingredients and a passion
            for perfection.
          </p>

          <p>
            Every recipe is carefully crafted to ensure rich flavors,
            beautiful presentation, and memorable experiences for our
            customers.
          </p>
        </div>

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1559622214-f8a9850965bb"
            alt="Bakery"
          />
        </div>
      </section>

      <section className="values">
        <h2>Why Choose Us?</h2>

        <div className="value-cards">
          <div className="value-card">
            <h3>Fresh Ingredients</h3>
            <p>
              We use only high-quality ingredients to ensure every bite
              tastes amazing.
            </p>
          </div>

          <div className="value-card">
            <h3>Expert Bakers</h3>
            <p>
              Our talented bakers combine creativity and skill to create
              beautiful cakes.
            </p>
          </div>

          <div className="value-card">
            <h3>Customer First</h3>
            <p>
              Your satisfaction is our priority, from ordering to delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-box">
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>100+</h2>
          <p>Cake Designs</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;