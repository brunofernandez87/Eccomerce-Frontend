import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routs from "./routes";
import { UserProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <CartProvider>
        <Routs />
      </CartProvider>
      <Footer />
    </UserProvider>
  );
}

export default App;
