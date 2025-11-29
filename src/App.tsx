import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routs from "./routes";
import { UserProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";
import { ProductListProvider } from "./context/productListContext";
import { UserListProvider } from "./context/userListContext";
import OrderListProvider from "./context/orderListContext";
import OrderDetailListProvider from "./context/orderDetailListContext";
import { ProductFilterProvider } from "./context/productFilterContext";
function App() {
  return (
    <UserProvider>
      <ProductListProvider>
        <ProductFilterProvider>
          <Header />
          <CartProvider>
            <UserListProvider>
              <OrderListProvider>
                <OrderDetailListProvider>
                  <Routs />
                </OrderDetailListProvider>
              </OrderListProvider>
            </UserListProvider>
          </CartProvider>
        </ProductFilterProvider>
      </ProductListProvider>
      <Footer />
    </UserProvider>
  );
}

export default App;
