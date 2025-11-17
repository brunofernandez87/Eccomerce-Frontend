import { useEffect } from "react";
import image from "../assets/mockReporte.jpg";
import { useUser } from "../context/userContext";
export default function Report() {
  const { user } = useUser();
  const date = new Date();
  const username = user.username;
  // esto mas adelante lo va a realizar el back es de ejemplo
  return (
    <div>
      <div>
        <img src={image} alt="Imagen de un reporte en excel" />
      </div>
      <div>
        <p> Creado en: {date.toLocaleDateString()}</p>
      </div>
      <div>
        <p> Generado por {username}</p>
      </div>
    </div>
  );
}
