import CardProducts from "./cardProducts";
export default function Home({ user, productList }) {
  return (
    <>
      <div className="Card-ProductsHome">
        <CardProducts user={user} productList={productList} />
      </div>
    </>
  );
}
