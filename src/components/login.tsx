export default function Login() {
  return (
    <div className="Div-Login">
      <form action="/Login" method="Post" id="ingresar">
        <label htmlFor="username">Usuario:</label>
        <input type="text" name="username" required />
        <label htmlFor="password"> Password: </label>
        <input type="password" name="password" required />
        <button type="submit" id="iniciar_sesion">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
