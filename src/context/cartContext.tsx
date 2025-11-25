import { createContext, useContext, useState } from "react";

const cartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartContent, setcartContent] = useState([]);

  const addOrUpdateItem = (productToAdd) => {
    const existingItemIndex = cartContent.findIndex(
      (item) => item.id_product === productToAdd.id_product
    );

    if (existingItemIndex > -1) {
      const newCart = cartContent.map((item, index) => {
        if (index === existingItemIndex) {
          const currentQuantity = item.quantity || 1;
          return { ...item, quantity: currentQuantity + 1 };
        }
        return item;
      });
      setcartContent(newCart);
    } else {
      const newItem = { ...productToAdd, quantity: 1 };
      setcartContent([...cartContent, newItem]);
    }
  };

  //modifica la cantidad (+ / -)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Eliminar el producto
      setcartContent(
        cartContent.filter((item) => item.id_product !== productId)
      );
    } else {
      // Actualizar la cantidad
      setcartContent(
        cartContent.map((item) =>
          item.id_product === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  return (
    <cartContext.Provider
      value={{
        cartContent,
        setcartContent,
        addOrUpdateItem, // Usar esta función para AGREGAR productos
        updateQuantity, // Usar esta función para los botones +/-
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un useCartProvider");
  }
  return context;
}
