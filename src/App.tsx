import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Register from "./components/register";
import Profile from "./components/profile";
import ChangePassword from "./components/changePassword";
import Recovery from "./components/recovery";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
