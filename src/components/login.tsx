import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Div-Login">
      <form action="/Login" method="Post">
        <label htmlFor="username">Usuario:</label>
        <input type="text" name="username" required />
        <label htmlFor="password_hash"> Password: </label>
        <input type="password" name="password_hash" required />
        <button type="submit" id="iniciar_sesion">
          Iniciar Sesión
        </button>
      </form>
      <Link to="/register" title="Register">
        <span>Registrarse</span>
      </Link>
      <Link to="/recovery" title="Recuperar Contraseña">
        <span>Recuperar Contraseña</span>
      </Link>
    </div>
  );
}
