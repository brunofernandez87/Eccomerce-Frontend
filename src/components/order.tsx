import orderMock from "../mock/orderMock.json";
import { useUser } from "../context/userContext";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Order() {
  const { user } = useUser();
  const [order, setorder] = useState(
    orderMock.filter((r) => r.id_user == user.username)
  );
  return (
    <div>
      {order.map((o) => (
        <div>
          <Link to={`/orderDetail/${o?.id_order}`}>
            <p>fecha:{o?.date}</p>
            <p>estado:{o?.state}</p>

            <p>total:{o?.total}</p>
          </Link>
          {(o.state == "en preparacion" || o.state == "en camino") && (
            <button
              onClick={() => {
                setorder(order.filter((r) => r.id_order != o.id_order));
                alert("Pedido eliminado");
              }}
            >
              Cancelar pedido
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
//si es admin que le aparezcan todas las ordenes de todos los usuarios, que pueda filtrar por usuario, por estado o por fecha