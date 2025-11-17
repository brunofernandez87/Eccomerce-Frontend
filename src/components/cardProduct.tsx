import { Link, Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../context/userContext";
import { useProductList } from "../context/productListContext";
import "../styles/cardProduct.css";
export default function CardProduct(props) {
  const { productList, setproductList } = useProductList();
  const { user } = useUser();
  const { productID, cartIN, addtocart } = props;
  const { id } = useParams();
  const [modified, setmodified] = useState(false);
  function onClickModified() {
    setmodified(!modified);
  }
  const [product, setProduct] = useState(() => {
    let initProduct;
    if (productID) {
      initProduct = productList.find((input) => input.id_product === productID);
    } else {
      initProduct = productList.find(
        (input) => input.id_product === parseInt(id)
      );
    }
    return initProduct;
  });
  function modifiedProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateProduct = {
      ...product,
      name: formData.get("name"),
      description: formData.get("description"),
      category: formData.get("category"),
      price: formData.get("price"),
      stock: formData.get("stock"),
    };
    setProduct(updateProduct);
    const copylist = productList.map((p) => {
      if (p.id_product === updateProduct.id_product) {
        return updateProduct;
      }
      return p;
    });
    setproductList(copylist);
    setmodified(!modified);
  }
  function formProduct() {
    return (
      // AÑADIDO: Contenedor específico para el formulario de modificación.
      // Esto permite aplicar el estilo oscuro y la estructura de grid solo aquí.
      <div className="Card-modified-Content">
        <form onSubmit={modifiedProduct}>
          <div className="Product-Image">
            <img src={image} alt={name} />
          </div>
          <div className="Card-Name">
            <input type="text" name="name" defaultValue={name} />
          </div>
          <div>
            <textarea name="description" defaultValue={description} />
          </div>
          <div>
            <input type="text" name="category" defaultValue={category} />
          </div>
          <div>
            <input type="number" name="price" defaultValue={price} />
          </div>
          <div>
            <label>Stock:</label>
            <input type="number" name="stock" defaultValue={stock} />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }
  if (!product) {
    const error = "Producto no encontrado";
    return <Navigate to={`/error/${error}`} replace />;
  }

  const { image, name, description, category, price, stock } = product;

  // NUEVO: Define la clase principal del componente de forma condicional
  const cardClassName = modified ? "Card-Product-Edit" : "Card-Product-View";

  return (
    // CAMBIO 1: El contenedor principal ahora usa la clase dinámica para cambiar el fondo y la disposición (Amarillo/Oscuro)
    <div className={cardClassName}>
      {modified == true ? (
        formProduct()
      ) : (
        <>
          <div className="Product-Image">
            <img src={image} alt={name} />
          </div>

          {/* CAMBIO 2: Agrupamos la información de la derecha en un contenedor para facilitar el diseño flex/grid */}
          <div className="Product-Info-Container">
            <div className="Card-Name">
              <p>
                <b>{name}</b>
              </p>
            </div>
            <div className="Product-Description">
              <p>{description}</p>
            </div>

            {/* CAMBIO 3: Agrupamos los detalles pequeños en un contenedor para aplicarles una rejilla (grid) en el CSS */}
            <div className="Product-Details">
              <div>
                <p>Categoría: {category}</p>
              </div>
              <div>
                <p>Precio: {price}</p>
              </div>
              <div>
                <p>Stock: {stock}</p>
              </div>
            </div>

            {!cartIN && (
              <div className="Product-Actions">
                {user && (
                  <>
                    {user.rol == "vendedor" && (
                      <button onClick={onClickModified}>Modificar</button>
                    )}
                  </>
                )}

                <button onClick={() => addtocart(product)}>
                  Agregar al carrito
                </button>
                <Link to={`/cart`}>
                  <button onClick={() => addtocart(product)}>
                    Comprar ahora
                  </button>
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
