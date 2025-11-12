import CardProduct from "./cardProduct";
import mockProduct from "../mock/productMock.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
  const mock = mockProduct[0];
  const mock2 = mockProduct[2];
  const { id } = useParams();
  let product;
  const initialCart = () => {
    let totallyfirst = [mock, mock2];
    if (id) {
      product = mockProduct.find((p) => p.id_product === parseInt(id));
      if (product) {
        totallyfirst = [...totallyfirst, { ...product }];
      }
    }
    return totallyfirst;
  };
  const [totally, settotally] = useState(initialCart);
  function handleclick() {
    alert("compra exitosa");
    settotally([]);
  }

  return (
    <>
      {totally.map((product) => (
        <div key={product.id_product} className="Product-cart">
          <CardProduct productID={product.id_product} cartIN={true} />
        </div>
      ))}
      <div>
        <button onClick={handleclick}>Comprar</button>
      </div>
    </>
  );
}
