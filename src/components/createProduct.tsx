import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const navigate = useNavigate();
  function handleClick() {
    alert("¡¡¡Producto Creado!!!");
    navigate("/");
  }
  return (
    <div>
      <h3> Crear nuevo Producto</h3>
      <form>
        <label htmlFor="name">Nombre del producto</label>
        <input type="text" name="name" required></input>
        <label htmlFor="description"> Descripcion</label>
        <textarea name="description"></textarea>
        <label htmlFor="category">Categoria:</label>
        <input
          type="text"
          name="category"
          /* cambiar por un select de categorias */ required
        ></input>
        <label htmlFor="price">Precio:</label>
        <input type="number" name="price" required></input>
        <label htmlFor="stock">Stock:</label>
        <input type="number" name="stock" required></input>
        {/* hacer mas adelante para que se pueda agregar imagen */}
        <button type="button" onClick={handleClick}>
          Crear
        </button>
      </form>
    </div>
  );
}
