import image from "../assets/mockReporte.jpg";
import { useUser } from "../context/userContext";
export default function Report() {
  const user = useUser();
  const date = new Date();
  const username = user.name;
  // esto mas adelante lo va a realizar el back es de ejemplo
  return (
    <div>
      <div>
        <img src={image} alt="Imagen de un reporte en excel" />
      </div>
      <div>
        <p> creado en: {date.toLocaleDateString()}</p>
      </div>
      <div>
        <p> generado por {username}</p>
      </div>
    </div>
  );
}
