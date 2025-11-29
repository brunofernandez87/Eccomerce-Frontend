import { Link } from "react-router-dom";
import { useOrderList } from "../../context/orderListContext";
import { useEffect, useState } from "react";
import FilterCategory from "../filterCategory";
export default function Order() {
  const { orderList, setorderList } = useOrderList();
  const [orderListFilter, setorderListFilter] = useState(orderList);
  const [page, setpage] = useState(1);
  const maxItem = 5;
  const limit = page * maxItem;
  const limitAnt = limit - maxItem;
  const orderFilter = orderListFilter.slice(limitAnt, limit);

  function handleClickNext() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setpage(page + 1);
  }
  function handleClickPrevious() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setpage(page - 1);
  }
  function filter(event) {
    const value = event.target.value;
    if (value == "") {
      setorderListFilter(orderList);
      setpage(1);
      return;
    }
    const result = orderList.filter((o) => o.id_user == value);
    setpage(1);
    setorderListFilter(result);
  }
  return (
    <div>
      <FilterCategory
        products={orderList}
        filter={filter}
        label={"buscar orden de"}
        category={"id_user"}
      />
      {orderFilter.map((o) => (
        <div key={o.id_order}>
          <Link to={`/orderDetail/${o?.id_order}`}>
            <p>fecha:{o?.date}</p>
            <p>estado:{o?.state}</p>
            <p> usuario: {o?.id_user}</p>
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
      <div>
        {page > 1 && (
          <button className="Next-Page" onClick={handleClickPrevious}>
            Pagina anterior
          </button>
        )}
        {limit < orderList.length && (
          <button className="Previous-Page" onClick={handleClickNext}>
            Pagina siguiente
          </button>
        )}
      </div>
    </div>
  );
}
//si es admin que le aparezcan todas las ordenes de todos los usuarios, que pueda filtrar por usuario, por estado o por fecha
