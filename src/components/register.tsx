export default function Register() {
  return (
    <div className="Container-Register">
      <form action="/Register" method="Post" id="ingresar">
        <label htmlFor="name">nombre</label>
        <input type="text" name="name" required />
        <label htmlFor="username"> username</label>
        <input type="text" name="username" required />
        <label htmlFor="email">email</label>
        <input type="email" name="email" />
        <label htmlFor="password_hash"> Password: </label>
        <input type="password" name="password_hash" required />
        <button type="submit" id="iniciar_sesion">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
