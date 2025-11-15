import { Link } from "react-router-dom";
import productMock from "../mock/productMock.json";
import { useState } from "react";
import "../styles/cardsproducts.css";
import FilterCategory from "./filterCategory";
import SelectProduct from "./selectProduct";
import SearchProduct from "./searchProduct";
export default function CardProducts({ user }) {
  const [page, setpage] = useState(1);
  const productFilt = productMock.filter((p) => p.stock > 0);
  /*volver product filt como use state en el home? o cambiarlo como constant en el home? */
  const [productfilter, setproductfilter] = useState(productFilt);
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
  function categoryFilter(event) {
    const value = event.target.value;
    if (value == "") {
      setproductfilter(productFilt);
      setpage(1);
      return;
    }
    const result = productFilt.filter((p) => {
      return p.category === value;
    });
    setpage(1);
    setproductfilter(result);
  }

  return (
    <>
      <SearchProduct
        productFilt={productFilt}
        setproductfilter={setproductfilter}
      />
      <FilterCategory products={productFilt} categoryFilter={categoryFilter} />
      <SelectProduct
        productfilter={productfilter}
        setpage={setpage}
        setproductfilter={setproductfilter}
      />
      {products.map((product) => (
        <div key={product.id_product} className="Card-Products">
          <Link to={`/product/${product.id_product}`} className="link-Products">
            <div className="Card-Images">
              <img
                src={product.image}
                alt={product.name}
                className="Image-product"
              />
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
          </Link>
          {user != null && (
            <>
              {user.id_rol == 3 && (
                /* al ser admin podes eliminar */ <button
                  className="Delete-Button"
                  onClick={() => {
                    setproductfilter(
                      productfilter.filter(
                        (p) => p.id_product !== product.id_product
                      )
                    );
                  }}
                >
                  X
                </button>
              )}
            </>
          )}
        </div>
      ))}
      <div>
        {page > 1 && (
          <button className="Next-Page" onClick={handleClickPrevious}>
            Pagina anterior
          </button>
        )}
        {limite < productfilter.length && (
          <button className="Previous-Page" onClick={handleClickNext}>
            Pagina siguiente
          </button>
        )}
      </div>
    </>
  );
}
