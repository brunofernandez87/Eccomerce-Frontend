import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routs from "./routes";
import { useState } from "react";

function App() {
  const [isloggedIn, setisloggedIn] = useState(false);
  return (
    <>
      <Header loggedIn={isloggedIn} />
      <Routs setisloggedIn={setisloggedIn} />
      <Footer />
    </>
  );
}

export default App;
