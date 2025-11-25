export default function ReportsCard({ image, date, username }) {
  return (
    <div>
      <div>
        <img src={image} alt="Imagen de un reporte en excel" />
      </div>
      <div>
        <p> Creado en: {date}</p>
      </div>
      <div>
        <p> Generado por {username}</p>
      </div>
    </div>
  );
}
