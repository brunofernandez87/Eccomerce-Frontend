export default function SearchProduct({
  productFilt,
  setproductfilter,
  category,
}) {
  function searchProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("search");
    const result = productFilt.filter((p) => {
      const value = p[category];
      return value.toLowerCase().includes(name);
    });
    setproductfilter(result);
  }
  return (
    <form onSubmit={searchProduct} className="form-Product">
      <input type="search" name="search" id="search" placeholder="Buscar" />
      <button id="botton-search">🔍</button>
    </form>
  );
}
