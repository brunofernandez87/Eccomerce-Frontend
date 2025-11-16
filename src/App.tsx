import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routs from "./routes";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routs />
      <Footer />
    </UserProvider>
  );
}

export default App;
