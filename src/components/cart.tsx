import CardProduct from "./cardProduct";
import mockProduct from "../mock/productMock.json";
const mock = mockProduct[0];
const mock2 = mockProduct[2];
export default function Cart() {
  const totally = [mock, mock2];
  return (
    <>
      {totally.map((product) => (
        <div key={product.id_product} className="Product-cart">
          <CardProduct {...product} cartIN={true} />
        </div>
      ))}
      <div>
        <button>Comprar</button>
      </div>
    </>
  );
}
