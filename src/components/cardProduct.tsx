import { Link, useParams } from "react-router-dom";
import productMock from "../mock/productMock.json";
export default function CardProduct(props) {
  const { productID, cartIN, addtocart } = props;
  const { id } = useParams();
  let product;
  if (productID) {
    product = productMock.find((p) => p.id_product === productID);
  } else {
    product = productMock.find((p) => p.id_product === parseInt(id));
    if (!product) {
      return (
        <div>
          <p> Producto no encontrado</p>
        </div>
      );
    }
  }

  const { id_product, image, name, description, category, price, stock } =
    product;

  return (
    <div className="Card-Product">
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
          <button>Modificar</button>
          <button onClick={() => addtocart(product)}>Agregar al carrito</button>
          <Link to={`/cart/${id_product}`}>
            <button>Comprar ahora</button>
          </Link>
        </div>
      )}
    </div>
  );
}
