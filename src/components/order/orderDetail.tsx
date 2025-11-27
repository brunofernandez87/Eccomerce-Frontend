import { useParams } from "react-router-dom";
import orderDetailMock from "../../mock/orderDetailMock.json";
import productoMock from "../../mock/productMock.json";
export default function OrderDetail() {
  const { id } = useParams();
  const detail = orderDetailMock.filter((d) => d.id_order == parseInt(id));
  const product = productoMock.find((p) => p.id_product == detail?.id_product);
  return (
    <div>
      {detail.map((d) => (
        <div>
          <p> producto:{product?.name}</p>
          <p>monto:{d?.amount}</p>
          <p>precio unitario:{d?.unit_price}</p>
        </div>
      ))}
    </div>
  );
}
