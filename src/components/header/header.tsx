import { Link } from "react-router-dom";
import logo from "../../assets/Logo eccomerce.jpeg";
import { useUser } from "../../context/userContext";
import { FaShoppingCart } from "react-icons/fa";
import "../../styles/header.css";
export default function Header() {
  const { user } = useUser();
  return (
    <header className="header-main">
      <div className="Logo">
        <img src={logo} alt="Logo jpg" />
      </div>
      <nav className="Nav-header">
        <Link to="/" title="Home" className="a-header">
          <button>Inicio</button>
        </Link>
        <Link to="/contact">
          <button>Contactanos</button>
        </Link>

        {user ? (
          <>
            <Link
              to={`/profile/${user.username}/${user.password_hash}`}
              title="Perfil"
            >
              <button>Perfil </button>
            </Link>
            {user.id_rol == 3 && (
              /* al ser admin podes ver reportes sobre tus ventas */
              <>
                <Link to="/report" title="Reportes">
                  <button>Ver reportes</button>
                </Link>
                <Link to="/create" title="Crear Producto">
                  <button>Crear Producto</button>
                </Link>
              </>
            )}
          </>
        ) : (
          <Link to="/login" title="Iniciar Sesion">
            <button>Iniciar Sesion</button>
          </Link>
        )}
        <div>
          <Link to="/cart" title="Carrito de compras">
            <button>
              <FaShoppingCart />
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
