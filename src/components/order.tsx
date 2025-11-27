import { Link } from "react-router-dom";
import { useOrderList } from "../context/orderListContext";
export default function Order() {
  const { orderList, setorderList } = useOrderList();
  return (
    <div>
      {orderList.map((o) => (
        <div key={o.id_order}>
          <Link to={`/orderDetail/${o?.id_order}`}>
            <p>fecha:{o?.date}</p>
            <p>estado:{o?.state}</p>

            <p>total:{o?.total}</p>
          </Link>
          {(o.state == "en preparacion" || o.state == "en camino") && (
            <button
              onClick={() => {
                setorderList((prevList) =>
                  prevList.filter((r) => r.id_order != o.id_order)
                );
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
