import React from "react";
import './CSS/Menu.css';
import Navbar from "./Components/nav.jsx";

const cakes = [
  {
    id: 1,
    name: "Chocolate Truffle",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    id: 2,
    name: "Red Velvet",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
  },
  {
    id: 3,
    name: "Vanilla Delight",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
  },
  {
    id: 4,
    name: "Strawberry Bliss",
    price: "₹749",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
  },
  {
    id: 5,
    name: "Black Forest",
    price: "₹649",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
  },
  {
    id: 6,
    name: "Custom Birthday Cake",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
  },
];

function MenuPage() {
  return (


    <div className="menu-page">

      <div className="menu-header">
        <h1>Our Cake Menu</h1>
        <p>
          Freshly baked, beautifully decorated, and delivered with love.
        </p>
      </div>

      <div className="menu-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} />

            <div className="cake-info">
              <h3>{cake.name}</h3>

              <div className="card-bottom">
                <span>{cake.price}</span>

                <button onClick={() => window.location.href = "/cart"}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default MenuPage;