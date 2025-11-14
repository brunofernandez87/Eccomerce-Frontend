import { Link, Navigate, useParams } from "react-router-dom";
import productMock from "../mock/productMock.json";
import { useState } from "react";
export default function CardProduct(props) {
  const { productID, cartIN, addtocart, user } = props;
  const { id } = useParams();
  const [modified, setmodified] = useState(false);
  function onClickModified() {
    setmodified(!modified);
  }
  const [product, setProduct] = useState(() => {
    let initProduct;
    if (productID) {
      initProduct = productMock.find((input) => input.id_product === productID);
    } else {
      initProduct = productMock.find(
        (input) => input.id_product === parseInt(id)
      );
      return initProduct;
    }
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
        formProduct()
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
            <p>stock: {stock}</p>
          </div>

          {!cartIN && (
            <div>
              {user && (
                <>
                  {user.id_rol == 3 && (
                    <button onClick={onClickModified}>Modificar</button>
                  )}
                </>
              )}

              <button onClick={() => addtocart(product)}>
                Agregar al carrito
              </button>
              <Link to={`/cart/${id_product}`}>
                <button>Comprar ahora</button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
