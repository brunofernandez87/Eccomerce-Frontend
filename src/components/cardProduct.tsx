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
      <>
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
      </>
    );
  }
  if (!product) {
    const error = "Producto no encontrado";
    return <Navigate to={`/error/${error}`} replace />;
  }

  const { id_product, image, name, description, category, price, stock } =
    product;

  return (
    <div className="Card-Product">
      {modified == true ? (
        formProduct() /* pasar a un componente separado */
      ) : (
        <>
          <div className="Product-Image">
            <img src={image} alt={name} />
          </div>
          <div className="Card-Name">
            <p>
              <b>{name}</b>
            </p>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <p>{category}</p>
          </div>
          <div>
            <p>{price}</p>
          </div>
          <div>
            <p>Stock: {stock}</p>
          </div>

          {!cartIN && (
            <div>
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
                <button
                  onClick={() =>
                    addtocart(product)
                  } /* donde meti el cambio mostrar a ivo */
                >
                  Comprar ahora
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
