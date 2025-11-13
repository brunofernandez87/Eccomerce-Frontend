import CardProducts from "./cardProducts";
export default function Home({ user }) {
  return (
    <>
      <div className="Card-ProductsHome">
        <CardProducts user={user} />
      </div>
    </>
  );
}
