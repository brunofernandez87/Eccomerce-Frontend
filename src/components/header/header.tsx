import { Link } from "react-router-dom";
import logo from "../../assets/Logo eccomerce.jpeg";
export default function Header({ loggedIn = false }) {
  return (
    <>
      <div className="Logo">
        <img src={logo} alt="Logo jpg" />
      </div>
      <nav className="Nav-header">
        <Link to="/" title="Home">
          <button>inicio</button>
        </Link>
        <button>consulta frecuentes</button>
        <button>contactanos</button>
        {loggedIn ? (
          <Link to="/profile" title="Perfil">
            <button>Perfil </button>
          </Link>
        ) : (
          <Link to="/login" title="Iniciar Sesion">
            <button>Iniciar Sesion</button>
          </Link>
        )}
        <div>
          <button>Carrito de compras</button>
        </div>
      </nav>
    </>
  );
}
