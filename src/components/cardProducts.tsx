import { Link } from "react-router-dom";
import productMock from "../mock/productMock.json";
import { useState } from "react";

export default function CardProducts() {
  const [page, setpage] = useState(1);
  const productfilter = productMock.filter((p) => p.stock > 0);
  const maxProduct = 5;
  const limite = page * maxProduct;
  const limiteant = limite - maxProduct;
  const products = productfilter.slice(limiteant, limite);
  function handleClickNext() {
    setpage(page + 1);
  }
  function handleClickPrevious() {
    setpage(page - 1);
  }
  return (
    <>
      {products.map((product) => (
        <div key={product.id_product} className="Card-Products">
          <Link to={`/product/${product.id_product}`} className="link-Products">
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
            {/* <div className="Card-Stocks">stock: {product.stock}</div> */}
          </Link>
        </div>
      ))}
      <div>
        {page > 1 && (
          <button onClick={handleClickPrevious}>Pagina anterior</button>
        )}
        {limite < productMock.length && (
          <button onClick={handleClickNext}>Pagina siguiente</button>
        )}
      </div>
    </>
  );
}
