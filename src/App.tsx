import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routs from "./routes";
import { useState } from "react";

function App() {
  const [user, setuser] = useState(null);
  return (
    <>
      <Header user={user} />
      <Routs setuser={setuser} />
      <Footer />
    </>
  );
}

export default App;
