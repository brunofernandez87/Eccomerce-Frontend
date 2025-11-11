import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import ChangePassword from "./components/changePassword";
import Recovery from "./components/recovery";
import Cart from "./components/cart";
import CardProduct from "./components/cardProduct";
export default function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<CardProduct />} />
    </Routes>
  );
}
