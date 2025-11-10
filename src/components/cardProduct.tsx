export default function CardProduct(props) {
  const { image, name, description, category, price, stock } = props;
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
      <button>Agregar al carrito</button>
      <button>Comprar ahora</button>
    </div>
  );
}
