import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Register from "./components/register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
