import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import ChangePassword from "./components/changePassword";
import Recovery from "./components/recovery";
import Cart from "./components/cart";
import CardProduct from "./components/cardProduct";
import Report from "./components/report";
import Error from "./components/error";
import CreateProduct from "./components/createProduct";
import AboutUS from "./components/aboutUs";
import Contact from "./components/contact";
import { Toaster, toast } from "react-hot-toast";
import { useCart } from "./context/cartContext";
export default function Routs() {
  const { cartContent, setcartContent } = useCart(); /* pasar a cardProduct */
  function handleAddToCart(product) {
    if (product) {
      setcartContent([...cartContent, product]);
      toast.success("producto agregado al carrito");
    }
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:usernam/:password" element={<Profile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route
          path="/product/:id"
          element={<CardProduct addtocart={handleAddToCart} />}
        />
        <Route path="/report" element={<Report />} />
        <Route path="/error/:error" element={<Error />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/aboutUs" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
