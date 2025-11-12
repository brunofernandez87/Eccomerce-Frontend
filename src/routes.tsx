import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import ChangePassword from "./components/changePassword";
import Recovery from "./components/recovery";
import Cart from "./components/cart";
import CardProduct from "./components/cardProduct";
import { useState } from "react";
export default function Routs({ setuser }) {
  const [cartContent, setcartContent] = useState([]);
  function handleAddToCart(product) {
    if (product) {
      alert("producto añadido al carrito");
      setcartContent([...cartContent, product]);
    }
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile/:usernam/:password"
        element={<Profile setuser={setuser} />}
      />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route
        path="/cart"
        element={
          <Cart cartContent={cartContent} setcartContent={setcartContent} />
        }
      />
      <Route
        path="/cart/:id"
        element={
          <Cart cartContent={cartContent} setcartContent={setcartContent} />
        }
      />
      <Route
        path="/product/:id"
        element={<CardProduct addtocart={handleAddToCart} />}
      />
    </Routes>
  );
}
