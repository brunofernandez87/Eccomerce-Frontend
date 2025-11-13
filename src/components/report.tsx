import reportMock from "../mock/reportMock.json";
import userMock from "../mock/userMock.json";
import image from "../assets/mockReporte.jpg";
export default function Report() {
  const report = reportMock[0];
  const user = userMock.find((u) => u.id_user === report.generated_by_user);
  // esto mas adelante lo va a realizar el back es de ejemplo
  return (
    <div>
      <div>
        <img src={image} alt="Imagen de un reporte en excel" />
      </div>
      <div>
        <p> creado en: {report.date_generated}</p>
      </div>
      <div>
        <p> generado por {user?.name}</p>
      </div>
    </div>
  );
}
