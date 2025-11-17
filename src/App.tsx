import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routs from "./routes";
import { UserProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";
import { ProductListProvider } from "./context/productListContext";
import { UserListProvider } from "./context/userListContext";
function App() {
  return (
    <UserProvider>
      <Header />
      <ProductListProvider>
        <CartProvider>
          <UserListProvider>
            <Routs />
          </UserListProvider>
        </CartProvider>
      </ProductListProvider>
      <Footer />
    </UserProvider>
  );
}

export default App;
