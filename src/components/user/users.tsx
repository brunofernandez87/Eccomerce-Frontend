import { useState } from "react";
import { useUserList } from "../../context/userListContext";
import { useUserListFilter } from "../../context/userListFilterContext";
import SearchProduct from "../product/searchCategory";
import FilterCategory from "../filterCategory";

export default function Users() {
  const { userList, setuserList } = useUserList();
  const { userListFilter, setuserListFilter } = useUserListFilter();
  const [page, setpage] = useState(1);
  const maxUsers = 5;
  const limit = page * maxUsers;
  const limitant = limit - maxUsers;
  function handleClickNext() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setpage(page + 1);
  }
  function handleClickPrevious() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setpage(page - 1);
  }
  const users = userListFilter.slice(limitant, limit);
  function filterUser(event) {
    const value = event.target.value;
    if (value == "") {
      setuserListFilter(userList);
      setpage(1);
      return;
    }
    const result = userList.filter((u) => u.rol == value);
    setpage(1);
    setuserListFilter(result);
  }
  return (
    <>
      <SearchProduct
        productFilt={userList}
        setproductfilter={setuserListFilter}
        category="name"
      />
      <FilterCategory
        products={userList}
        category="rol"
        filter={filterUser}
        label="ordenar por"
      />
      {users.map((u) => (
        <div key={u.id_user}>
          <div className="Image-Profile">
            <img src={u.image} alt="Profile.png" />
          </div>
          <div className="Username-Profile">
            <p> Nombre: {u.name}</p>
          </div>
          <div className="Username-Profile">
            <p>Username: {u.username}</p>
          </div>
          <div className="Email-Profile">
            <p>Email: {u.email}</p>
          </div>
          <div>
            <p>Rol: {u.rol}</p>
          </div>
          {u.rol == "cliente" && (
            <button
              onClick={() => {
                setuserList((prevList) =>
                  prevList.filter((user) => user.id_user !== u.id_user)
                );
                setuserListFilter((prevFilter) =>
                  prevFilter.filter((user) => user.id_user !== u.id_user)
                );
              }}
            >
              X
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
        {limit < userListFilter.length && (
          <button className="Previous-Page" onClick={handleClickNext}>
            Pagina siguiente
          </button>
        )}
      </div>
    </>
  );
}
