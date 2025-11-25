import orderMock from "../mock/orderMock.json";
import { useUser } from "../context/userContext";
import { Link } from "react-router-dom";
export default function Order() {
  const { user } = useUser();
  const order = orderMock.filter((r) => r.id_user == user.username);
  /* cambiar que si son mas de uno se recorra */
  return (
    <div>
      {order.map((o) => (
        <Link to={`/orderDetail/${o?.id_order}`}>
          <p>fecha:{o?.date}</p>
          <p>estado:{o?.state}</p>
          <p>total:{o?.total}</p>
        </Link>
      ))}
    </div>
  );
}
