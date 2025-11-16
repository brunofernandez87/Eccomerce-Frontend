import CardProducts from "./cardProducts";
export default function Home({ productList }) {
  return (
    <>
      <div className="Card-ProductsHome">
        <CardProducts productList={productList} />
      </div>
    </>
  );
}
