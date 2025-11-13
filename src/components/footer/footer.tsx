import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <b>informacion de contacto</b>
      </p>
      <p>
        <a href="">Agroinsumos@gmail.com</a>
      </p>
      <p>
        <a href="">+54291861457</a>
      </p>
      <p>Bahia Blanca Springfield 514</p>
      <Link to="/aboutUS">
        <button>Acerca de nosotros</button>
      </Link>

      <button>Redes sociales</button>
    </footer>
  );
}
