import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routs from "./routes";

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <Routs />
      <Footer />
    </>
  );
}

export default App;
