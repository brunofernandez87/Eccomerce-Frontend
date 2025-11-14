import { Link } from "react-router-dom";
import productMock from "../mock/productMock.json";
import { useState } from "react";
import "../styles/cardsproducts.css";
import FilterCategory from "./filterCategory";

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
  function searchProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("search");
    const result = productFilt.filter((p) => {
      return p.name.toLowerCase().includes(name);
    });
    setproductfilter(result);
  }
  function handleClicknew(event) {
    const value = event.target.value;
    const copyfilter = [...productfilter];
    switch (value) {
      case "alfabeticamente":
        setproductfilter(
          copyfilter.sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case "viejo a nuevo":
        setproductfilter(
          copyfilter.sort((a, b) => a.id_product - b.id_product)
        );
        break;
      case "mas nuevo a mas viejo":
        setproductfilter(
          copyfilter.sort((a, b) => b.id_product - a.id_product)
        );
        break;
      case "precio mayor menor":
        setproductfilter(copyfilter.sort((a, b) => b.price - a.price));
        break;
      case "precio menor mayor":
        setproductfilter(copyfilter.sort((a, b) => a.price - b.price));
        break;
    }
    setpage(1);
  }
  return (
    <>
      <form onSubmit={searchProduct} className="form-Product">
        <input type="search" name="search" id="search" placeholder="buscar" />
        <button id="botton-search">🔍</button>
      </form>
      <FilterCategory products={productFilt} categoryFilter={categoryFilter} />
      <select onChange={handleClicknew}>
        /* pasar a home */
        <option value={""}> Ordenar por</option>
        <option value={"precio mayor menor"}>precio de mayor a menor </option>
        <option value={"precio menor mayor"}>precio de menor a mayor </option>
        <option value={"viejo a nuevo"}> mas viejo a mas nuevo</option>
        <option value={"alfabeticamente"}>alfatebeticamente </option>
        <option value={"mas nuevo a mas viejo"}> mas nuevo a mas viejo</option>
      </select>
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
