import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/homePage.jsx";
import MenuPage from "./Pages/Menu.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Payment from "./Pages/Payment.jsx";
import Nearby from "./Pages/Nearby.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import Cart from "./Pages/Cart.jsx";
import Admin from "./Pages/Admin.jsx";
import Profile from "./Pages/Profile.jsx";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/menu" element={<MenuPage />} />

        <Route path="/About" element={<AboutUs />} />

        <Route path="/Payment" element={<Payment />} />

        <Route path="/nearby" element={<Nearby />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/Admin" element={<Admin />} />

        <Route path="/Profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;