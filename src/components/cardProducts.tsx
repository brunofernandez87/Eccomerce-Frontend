import productMock from "../mock/productMock.json";
export default function CardProducts() {
  return productMock.map((product) => (
    <div key={product.id_product} className="Card-Products">
      <div className="Card-Images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="Card-Names">
        <p>
          <b>{product.name}</b>
        </p>
      </div>
      <div className="Card-Descriptions">{product.description}</div>
      <div className="Card-Categories">{product.category}</div>
      <div className="Card-Prices">
        <p>
          <b>Precio:{product.price}</b>
        </p>
      </div>
      <div className="Card-Stocks">stock: {product.stock}</div>
    </div>
  ));
}
