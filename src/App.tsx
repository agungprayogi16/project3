/** @format */

import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPages from "./pages/AboutPages";
import TeamsPages from "./pages/TeamsPages";
import PromoPages from "./pages/PromoPages";
import ShopPages from "./pages/ShopPages";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePages />}
      />
      <Route
        path='/about'
        element={<AboutPages />}
      />
      <Route
        path='/contact'
        element={<Contact />}
      />
      <Route
        path='/promo'
        element={<PromoPages />}
      />
      <Route
        path='/teams'
        element={<TeamsPages />}
      />

      <Route
        path='/shop'
        element={<ShopPages />}
      />

      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Register />}
      />
    </Routes>
  );
}

export default App;
