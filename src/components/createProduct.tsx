import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [stock, setstock] = useState("");
  const visibility =
    name.trim() !== "" &&
    category.trim() !== "" &&
    price.trim() !== "" &&
    stock !== "";
  function handleClick() {
    alert("¡¡¡Producto Creado!!!");
    navigate("/");
  }
  return (
    <div>
      <h3> Crear nuevo Producto</h3>
      <form>
        <label htmlFor="image"> Imagen</label>
        <input type="image" name="image"></input>
        <label htmlFor="name">Nombre del producto</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <label htmlFor="description"> Descripcion</label>
        <textarea name="description"></textarea>
        <label htmlFor="category">Categoria:</label>
        <input
          type="text"
          name="category"
          /* cambiar por un select de categorias */
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        ></input>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        ></input>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          name="stock"
          value={stock}
          onChange={(e) => setstock(e.target.value)}
        ></input>
        <button type="button" onClick={handleClick} disabled={!visibility}>
          Crear
        </button>
      </form>
    </div>
  );
}
