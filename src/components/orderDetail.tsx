import { useParams } from "react-router-dom";
import orderDetailMock from "../mock/orderDetailMock.json";
import productoMock from "../mock/productMock.json";
export default function OrderDetail() {
  const { id } = useParams();
  const detail = orderDetailMock.find((d) => d.id_order == parseInt(id));
  const product = productoMock.find((p) => p.id_product == detail?.id_product);
  //hacer que se pueda recorrer
  return (
    <div>
      <p> producto:{product?.name}</p>
      <p>monto:{detail?.amount}</p>
      <p>precio unitario:{detail?.unit_price}</p>
    </div>
  );
}
