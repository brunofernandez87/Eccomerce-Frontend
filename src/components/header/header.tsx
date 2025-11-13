import { Link } from "react-router-dom";
import logo from "../../assets/Logo eccomerce.jpeg";
export default function Header({ user }) {
  return (
    <>
      <div className="Logo">
        <img src={logo} alt="Logo jpg" />
      </div>
      <nav className="Nav-header">
        <Link to="/" title="Home">
          <button>inicio</button>
        </Link>
        <button>preguntas frecuentes</button>
        <button>contactanos</button>
        {user ? (
          <>
            <Link
              to={`/profile/${user.username}/${user.password_hash}`}
              title="Perfil"
            >
              <button>Perfil </button>
            </Link>
            <Link to="/report" title="Reportes">
              <button>Ver reportes</button>
            </Link>
          </>
        ) : (
          <Link to="/login" title="Iniciar Sesion">
            <button>Iniciar Sesion</button>
          </Link>
        )}
        <div>
          <Link to="/cart" title="Carrito de compras">
            <button>Carrito de compras</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
