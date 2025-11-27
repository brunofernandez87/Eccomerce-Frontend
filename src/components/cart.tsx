import { useMemo } from "react";
import { useCart } from "../context/cartContext";
import { toast } from "react-hot-toast";
import "../styles/cart.css";

const getProductImage = (product) => product.image;
export default function Cart() {
  const { cartContent, setcartContent, updateQuantity } = useCart(); // Calcula el total a pagar
  const total = useMemo(() => {
    return cartContent.reduce(
      // Suma el precio por la cantidad
      (sum, product) => sum + product.price * (product.quantity || 1),
      0
    );
  }, [cartContent]);

  function handleBuy() {
    toast.success("Productos Comprados"); // Muestra una notificación
    setcartContent([]); // Vacía el carrito despues de la compra
  }

  const isCartEmpty = cartContent.length === 0;

  return (
    <div className="cart-page-container">
      <h3 className="cart-title">Tu Carrito de Compras</h3>
      {isCartEmpty ? (
        <div className="cart-empty-container">
          <p className="cart-empty-message">Tu carrito está vacío 🧺</p>
        </div>
      ) : (
        <div className="cart-content-wrapper">
          <div className="cart-item-list">
            {cartContent.map((product) => (
              <div key={product.id_product} className="cart-item">
                <div className="item-info">
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    className="item-image" // fijar el tamaño de la imagen.
                  />
                  <span className="item-name">{product.name}</span>
                </div>
                <div className="item-quantity-controls">
                  <button
                    onClick={() =>
                      updateQuantity(
                        product.id_product,
                        (product.quantity || 1) - 1
                      )
                    }
                    className="qty-btn remove-btn"
                  >
                    −
                  </button>
                  <span className="item-quantity">{product.quantity || 1}</span>
                  <button
                    onClick={() =>
                      updateQuantity(
                        product.id_product,
                        (product.quantity || 1) + 1
                      )
                    }
                    className="qty-btn add-btn"
                  >
                    +
                  </button>
                </div>
                <span className="item-price">
                  ${(product.price * (product.quantity || 1)).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total a Pagar:</span>
              <span className="total-value">${total.toFixed(2)}</span>
            </div>
            <button onClick={handleBuy} className="buy-button">
              Comprar Todo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
