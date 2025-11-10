export default function Recovery() {
  return (
    <form action="/recovery" method="Post">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />
      <button type="submit"> Enviar Mail</button>
    </form>
  );
}
