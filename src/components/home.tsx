import CardProducts from "./cardProducts";

export default function Home({ user }) {
  return (
    <>
      <CardProducts user={user} />
    </>
  );
}
