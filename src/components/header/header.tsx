import { Link } from "react-router-dom";

export default function Header({ loggedIn = false }) {
  return (
    <nav className="Nav-header">
      <Link to="/" title="Home">
        <button>inicio</button>
      </Link>
      <button>consulta frecuentes</button>
      <button>contactanos</button>
      {loggedIn ? (
        <a title="Perfil" href="login">
          <span>Perfil</span>
        </a>
      ) : (
        <Link to="/login" title="Profile">
          <button>Iniciar Sesion</button>
        </Link>
      )}
      <div>
        <button>Carrito de compras</button>
      </div>
    </nav>
  );
}
