import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState(false);
  return (
    <div className="Div-Login">
      <form action={`profile/${user}/${password}`}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          name="username"
          required
          value={user}
          onChange={(e) => setuser(e.target.value)}
        />
        <label htmlFor="password_hash"> Password: </label>
        <input
          type={showpassword ? "text" : "password"}
          name="password_hash"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          onClick={() => setshowpassword(!showpassword)}
          type="button" /*cambiar por ojo*/
        >
          {showpassword ? <p>ocultar contraseña</p> : <p>mostrar contraseña</p>}
        </button>
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
