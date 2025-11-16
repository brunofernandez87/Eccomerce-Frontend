import { createContext, useContext, useState } from "react";
const cartContext = createContext(null);
export function CartProvider({ children }) {
  const [cartContent, setcartContent] = useState([]);
  return (
    <cartContext.Provider value={{ cartContent, setcartContent }}>
      {children}
    </cartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un AuthProvider");
  }
  return context;
}
