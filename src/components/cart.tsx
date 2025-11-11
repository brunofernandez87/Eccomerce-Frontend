import CardProduct from "./cardProduct";
import mockProduct from "../mock/productMock.json";
import { useParams } from "react-router-dom";

export default function Cart() {
  const mock = mockProduct[0];
  const mock2 = mockProduct[2];
  const { id } = useParams();
  let totally = [mock, mock2];
  let product;
  if (id) {
    product = mockProduct.find((p) => p.id_product === parseInt(id));
    if (product) {
      totally = [...totally, { ...product }];
    }
  }

  return (
    <>
      {totally.map((product) => (
        <div key={product.id_product} className="Product-cart">
          <CardProduct productID={product.id_product} cartIN={true} />
        </div>
      ))}
      <div>
        <button
          onClick={() => {
            alert("Compra exitosa");
          }}
        >
          Comprar
        </button>
      </div>
    </>
  );
}
