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
import { UserListFilterProvider } from "./context/userListFilterContext";
import { ReportListProvider } from "./context/reportListContext";
import { ReportListFilterProvider } from "./context/reportListFilterContext";
function App() {
  return (
    <UserProvider>
      <ProductListProvider>
        <ProductFilterProvider>
          <UserListProvider>
            <UserListFilterProvider>
              <ReportListProvider>
                <ReportListFilterProvider>
                  <Header />
                  <CartProvider>
                    <OrderListProvider>
                      <OrderDetailListProvider>
                        <Routs />
                      </OrderDetailListProvider>
                    </OrderListProvider>
                  </CartProvider>
                </ReportListFilterProvider>
              </ReportListProvider>
            </UserListFilterProvider>
          </UserListProvider>
        </ProductFilterProvider>
      </ProductListProvider>
      <Footer />
    </UserProvider>
  );
}

export default App;
