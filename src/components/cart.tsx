import CardProduct from "./cardProduct";
import mockProduct from "../mock/productMock.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/cartContext";
import toast from "react-hot-toast";

export default function Cart() {
  const { cartContent, setcartContent } = useCart();
  function handleclick() {
    toast.success("Productos Comprados");
    setcartContent([]);
  }

  return (
    <>
      {cartContent.map((product) => (
        <div key={product.id_product} className="Product-cart">
          <CardProduct productID={product.id_product} cartIN={true} />
        </div>
      ))}
      <div>
        {cartContent.length > 0 && (
          <button onClick={handleclick}>Comprar</button>
        )}
      </div>
    </>
  );
}
